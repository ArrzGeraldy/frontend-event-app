import Link from "next/link";
interface Ievent {
  id: string;
  image: object;
  title: string;
  author: object;
}

const Card = ({ event }: Ievent | any) => {
  return (
    <div
      className="group relative flex min-h-[380px] w-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]"
      key={event.event_id}
    >
      <Link
        href={`/events/${event.event_id}`}
        style={{
          backgroundImage: `url(${event.image.url})`,
        }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      ></Link>
      <div className="px-4 py-4">
        <span className="bg-emerald-100 text-xs px-4 font-bold py-1 rounded-full text-emerald-500 ">
          FREE
        </span>
        <span className="bg-gray-200 text-xs px-4 font-bold py-1 rounded-full text-gray-500 ms-2">
          Development
        </span>
        <p className="text-gray-500 text-sm mt-4">Fri, Des 15, 8:30 AM</p>
        <div className="mt-4 flex flex-col gap-4">
          <h4 className="text-xl font-bold">{event.title}</h4>
          <h4 className="text-sm">{event.author.username} | JS Mastery</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
