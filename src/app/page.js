import Banner from "./component/shared/Banner/Banner";
import Footer from "./component/shared/Footer/page";
import History from "./component/shared/History/page";
// import Icons from "./component/shared/Icons/page";
import { Crete_Round } from "next/font/google";

const creteRound = Crete_Round({
  subsets: ["latin"],
  weight: ["400"], // Crete Round only has a weight of 400
  variable: "--font-crete-round",
});

const HomePage = () => {
  console.log("Hello world");
  return (
    <>
      <div className={`${creteRound.variable} font-serif`}>
        <Banner />
        
        {/* <Icons /> */}
        
      <Footer/>
      </div>
     
    </>
  );
};

export default HomePage;