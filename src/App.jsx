import React from "react";
import "./App.css";
import heroImage from "../src/assets/heading.jpg";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import navBarImage from "./assets/navbarImage.png";
const App = () => {
  return (
    <div>
      <div className="xsm:h-10 sm:h-14  bg-slate-100 border-b-2 border-t-2 border-gray-200 fixed top-11 w-full">
        <img
          src={navBarImage}
          alt=""
          width={600}
          className="m-auto px-2 py-1"
        />
      </div>
      <div className="h-20"></div>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-10 pb-15 gap-5">
        <div className="text-center">
          <h1 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl font-sans">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-pink-600">
              Coming up with something new
            </span>
          </h1>
        </div>
        <div className="font-extrabold text-md text-black md:text-center text-start">
          Sorry for the Amazing MSJ Website being down. We are working on some
          Infrastructure level changes that will allow us to be better, faster,
          leaner and more sustainable in the long term. While you wait for our
          website to be back online.
          <div className="h-3"></div>
          You can visit us here on our Socials:
          <br /> The Metaverse Street Journal LinkedIn:
          <a
            href="https://www.linkedin.com/company/metaversenews"
            className="text-blue-400 font-extraBold"
          >
            Click here
          </a>
          <div className="h-3"></div>
          The Metaverse Street Journal <b>X</b> Account:
          <a href="https://x.com/Metaverseeditor" className="text-blue-400">
            {" "}
            Click here
          </a>{" "}
          <div className="h-3"></div>
          The Metaverse Street Journal YouTube:
          <a
            href="https://www.youtube.com/@TheMetaverseStreetJournal"
            className="text-blue-400"
          >
            Click here
          </a>
          <div className="h-3"></div>
          The Metaverse Street Journal's founders LinkedIn:
          <a
            href="https://www.linkedin.com/in/tanmaya-sharma/"
            className="text-blue-400"
          >
            Click here
          </a>
          <div className="h-3"></div>
          You be the Arbiter of Truth the readers of The Metaverse Street
          Journal.
          <div className="h-3"></div> Yours sincerely, <br /> Tan and the MSJ
          Team
        </div>
        <div className="flex justify-center gap-10 text-4xl mb-16">
          <a href=" https://www.linkedin.com/company/metaversenews">
            <div>
              <FaLinkedin />
            </div>
          </a>
          <a href=" https://x.com/Metaverseeditor">
            <FaXTwitter />
          </a>
          <a href="https://www.youtube.com/@TheMetaverseStreetJournal">
            <FaYoutube />
          </a>
          <a href="https://www.linkedin.com/in/tanmaya-sharma/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
