import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "../../../utils/authOptions";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  // Provide a fallback image URL if session?.user?.image is not present
  const imageUrl = session?.user?.image || "/default-avatar.png";

  return (
    <div className="py-24 justify-center text-center items-center m-auto ">
      {session?.user && (
        <>
          <h1 className="text-4xl text-center font-bold mt-10 ">
            Welcome To  {session?.user?.name}
          </h1>
          <h1 className="text-3xl text-center mt-10">
            <span className="text-red-800">Log-IN user  email :</span>
            <br/>
            {session?.user?.email}
          </h1>
          <Image
            src={imageUrl}
            width={4000}
            height={4000}
            alt="User Image"
            className="mx-auto w-32 h-32 rounded-full mt-5 "
            quality={85}
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
