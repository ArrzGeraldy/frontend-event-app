import { PiTrash } from "react-icons/pi";
import Card from "../ui/shared/Card";
import { useAuthContext } from "@/hooks/useAuthContext";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Toast from "../ui/shared/Toast";
import ToastSuccess from "../ui/shared/ToastSuccess";
import SkeletonCard from "../ui/shared/SkeletonCard";

interface IeventUser {
  eventsUser: any;
  isLoading: any;
  loadingEventUser: boolean;
  isdeleted: any;
  setIsdeleted: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventsLIstUser = ({
  eventsUser,
  isLoading,
  loadingEventUser,
  isdeleted,
  setIsdeleted,
  setIsLoading,
}: IeventUser) => {
  const { user } = useAuthContext();

  const deleteEvent = async (eventId: any) => {
    setIsLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/event/${eventId}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${user}` },
      }
    );
    const json = await response.json();
    if (!response.ok) {
      setIsdeleted("error");
    }
    if (json.type) {
      console.log(json);
      setIsdeleted("delete");
    }
    setIsLoading(false);
  };

  const renderEventUser = () => {
    return eventsUser.map((event: any, i: any) => (
      <div className="relative" key={i}>
        <Card event={event} />
        <div className="flex absolute top-2 right-2 cursor-pointer">
          <AlertDialog>
            <AlertDialogTrigger>
              <PiTrash
                size={40}
                className="hover:bg-black transition-all hover:text-gray-200 rounded-md py-2 text-gray-300 bg-gray-900  drop-shadow-md cursor pointer"
              />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription className="text-gray-800">
                  This action cannot be undone. This will permanently delete
                  your event from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-700"
                  onClick={() => deleteEvent(event.event_id)}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    ));
  };

  const renderSkeletonCard = () => {
    return <SkeletonCard />;
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      <h2 className="text-2xl font-semibold">My Events</h2>
      {isLoading && <div className="custom-loader"></div>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
        {loadingEventUser ? renderSkeletonCard() : renderEventUser()}
      </div>
      {isdeleted === "error" ? <Toast setIsDeleted={setIsdeleted} /> : null}
      {isdeleted === "delete" ? (
        <ToastSuccess setIsDeleted={setIsdeleted} />
      ) : null}
    </div>
  );
};

export default EventsLIstUser;
