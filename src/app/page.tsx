
import Bestseller from "@/components/BestSeller";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Verieties from "@/components/Verieties";


export default function Home() {
  return (
   <div>
    <Navbar />
    <br />
    <Verieties/>
    <br />
    <Bestseller/>
    <br />
    <Offer />
    <br />
    <Features/>
    <br />
    <Footer/>

   </div>
  );
}
