import Image from "next/image";
import { Crete_Round } from "next/font/google";
const creteRound = Crete_Round({
  subsets: ["latin"],
  weight: ["400"], // Crete Round only has a weight of 400
  variable: "--font-crete-round",
});

export default function Events() {
    
  const events = [
    {
      title: "EMBARKING ON A JOURNEY OF REFLECTION",
      date: "July 25, 2024 @ 15:00 - 19:00",
      location: "85 Preston Rd. Inglewood, Maine 980",
      image: "/asset/mos.jpg",
    },
    {
      title: "CELEBRATED AT THE END OF RAMADAN",
      date: "July 25, 2024 @ 15:00 - 19:00",
      location: "85 Preston Rd. Inglewood, Maine 980",
      image: "/asset/mos1.jpg",
    },
    {
      title: "EXPLORING ISLAMIC INSIGHTS AND WISDOM",
      date: "July 2, 2024 @ 15:00 - 19:00",
      location: "85 Preston Rd. Inglewood, Maine 980",
      image: "/asset/mos3.jpg",
    },
    {
      title: "EXPLORING ISLAMIC INSIGHTS AND WISDOM",
      date: "July 2, 2024 @ 15:00 - 19:00",
      location: "85 Preston Rd. Inglewood, Maine 980",
      image: "/asset/mos2.jpg",
    },
  ];

    return (
        <div className={`${creteRound.variable} font-serif`}>
            <div className="bg-slate-50 py-24">
            <div className=" max-w-[1500px] m-auto py-16 px-4 sm:px-6 lg:px-8 text-center ">
      <h2 className="text-lg text-orange-500 font-semibold">Our Event</h2>
      <h1 className="text-3xl font-bold text-gray-900 mt-2">
        OUR UPCOMING EVENTS
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 justify-center items-center m-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className=" rounded-2xl overflow-hidden text-center "
          >
            {/* Image Container with Rounded Top */}
            <div className="relative overflow-hidden rounded-t-full w-80 h-96 overflow-hidden border-[15px] border-white shadow-lg">
              <Image
                src={event.image}
                alt={event.title}
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Event Details */}
            <div className="p-4">
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {event.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">📅 {event.date}</p>
              <p className="text-gray-600 text-sm">📍 {event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
            </div>
   
        </div>
   
  );
}
