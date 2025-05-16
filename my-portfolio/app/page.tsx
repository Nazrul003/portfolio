
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Grid from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
export default function Home() {
  return (
  <main className="relative bg-black-100 flex justify-center items-center
  flex-col  mx-auto ">
     <div className="max-w-7xl w-full">
     <Navbar />
      <div className="flex flex-col ">
      <Hero />
      <Grid />
      <Project />
      <Experience />
      <Contact />
      </div>
    </div> 
    
  </main>
  );
}
