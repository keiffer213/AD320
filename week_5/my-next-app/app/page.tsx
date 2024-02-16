import Image from "next/image";
import Header1 from '../components/Header1';
import Main1 from '../components/Main1';
import Footer1 from '../components/Footer1';


export default function Home() {
  return (
      <div className=" block container p-4">

        <Header1 />
        <Main1 />
        <Footer1 />

      </div>
  );
}




