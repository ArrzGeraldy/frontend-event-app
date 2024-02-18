import { useAuthContext } from "@/hooks/useAuthContext";
import { PiPencilSimpleLine } from "react-icons/pi";
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

interface userDetailProps {
  username: string;
  email: string;
  detailLoading: boolean;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const Profile = ({
  username,
  email,
  detailLoading,
  setUsername,
}: userDetailProps) => {
  const { user } = useAuthContext();

  const handleEditUsername = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user`, {
      method: "PUT",
      headers: {
        "Content-type": "Application/json",
        Authorization: `Bearer ${user}`,
      },
      body: JSON.stringify({ username: username }),
    });
    const { data } = await response.json();
    const oldToken = localStorage.getItem("token");
    if (oldToken) localStorage.removeItem("token");
    localStorage.setItem("token", data.access_token);
    location.reload();
  };

  return (
    <div className="w-5/6">
      <h2 className="text-2xl font-semibold mb-8 mt-8">Profile</h2>
      {detailLoading ? (
        <div>Loading</div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p>Username</p>
            <div className="w-full rounded-md border-2 px-4 py-2 bg-white flex items-center justify-between">
              <span>{username}</span>
              <AlertDialog>
                <AlertDialogTrigger className="cursor-pointer">
                  <PiPencilSimpleLine size={24} />
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Change username</AlertDialogTitle>
                    <AlertDialogDescription>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="text-black p-2 w-full rounded-md border border-gray-600"
                      />
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleEditUsername}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p>Email</p>
            <div className="w-full rounded-md border-2 px-4 py-2 bg-gray-100 cursor-not-allowed">
              {email}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
