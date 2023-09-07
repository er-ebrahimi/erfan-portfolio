import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 toblack/10">
        {/* title */}
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <h1 className="h1">
            Hi Im Erfan <br /> Into{" "}
            <span className="text-accent">Computer Engineering </span>
          </h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            {"I'm currently working on Front end websites in university and out of it. I'm looking to collaborate with game developers. I'm currently learning Unity. Ask me about what you want. (don't tell anyone but I want to people use what I created)"}
          </p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative"><ProjectsBtn></ProjectsBtn></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
