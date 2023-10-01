import My_Hero_Section from "@/components/My_Hero_Section";
import Footer from "@/layout/footer/Footer";
import Navbar from "@/layout/navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <My_Hero_Section/>
      <Footer />
    </div>
  );
}
