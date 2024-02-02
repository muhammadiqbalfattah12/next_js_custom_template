import { FaKiss } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {  
  return (
    <main>
    <div className="p-4 bg-red-700 text-white"> Hello Welcome, to Muhammad Iqbal Fattah Next.js Templates </div>
    <button className="btn btn-primary mt-3"> Daisy UI has Joined! </button>
    <h1 className="p-4 bg-red-300 flex gap-2 items-center text-black mt-3"> React Icon has Joined ! <FaKiss /> </h1>
    <button className="btn btn-secondary my-3 p-2"> Hungry? Here get some Toast </button>
    </main>
  );
}
