import { Inter } from "@next/font/google";
import {
  About,
  Header,
  Services,
  References,
  Contact,
  Footer,
  Machines,
  Hero,
} from "./components";

export default function Home() {
  return (
    <div className={`min-h-screen bg-[#1d1d1b]`}>
      <Hero />

      <div className="container w-full">
        {/* <About /> */}
      
      </div>
    </div>
  );
}
