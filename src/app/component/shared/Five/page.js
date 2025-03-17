import Image from "next/image";

const fivePillars = [
  { name: "Shahadah", image: "/assets/shahadah.jpg" },
  { name: "Salah", image: "/assets/salah.jpg" },
  { name: "Sawm", image: "/assets/sawm.jpg" },
  { name: "Zakah", image: "/assets/zakah.jpg" },
  { name: "Hajj", image: "/assets/hajj.jpg" },
];

export default function FivePillars() {
  return (
    <div className="bg-gray-100 py-12">
      {/* Title */}
      <div className="text-center mb-10">
        <p className="text-yellow-600 uppercase tracking-widest">Islam Pillars</p>
        <h2 className="text-3xl md:text-4xl font-bold">Five Pillars of Islam</h2>
      </div>

      {/* Pillars Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {fivePillars.map((pillar, index) => (
          <div key={index} className="text-center">
            {/* Circular Image */}
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={pillar.image}
                alt={pillar.name}
                width={208}
                height={208}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Label */}
            <p className="mt-4 text-xl font-semibold">{pillar.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
