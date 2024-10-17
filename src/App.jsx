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
      <div className="flex flex-col items-center justify-start min-h-screen px-10 pt-10 pb-15 gap-5">
        <div className="honk-heading text-center">
          Coming up with something new
        </div>
        <div className="text-center dancing-script-text-body font-extrabold text-xl text-slate-500">
          Sorry for the Amazing MSJ Website being down. We are working on some
          Infrastructure level changes that will allow us to be better, faster,
          leaner and more sustainable in the long term. While you wait for our
          website to be back online. You can visit us here on our Socials: The
          Metaverse Street Journal LinkedIn:
          <a
            href="https://www.linkedin.com/company/metaversenews"
            className="text-blue-400 font-black"
          >
            {" "}
            Click here
          </a>
          <br />
          The Metaverse Street Journal X Account:
          <a href="https://x.com/Metaverseeditor" className="text-blue-400">
            {" "}
            Click here
          </a>{" "}
          <br />
          The Metaverse Street Journal YouTube:
          <a
            href="https://www.youtube.com/@TheMetaverseStreetJournal"
            className="text-blue-400"
          >
            Click here
          </a>
          <br />
          The Metaverse Street Journal's founders LinkedIn:
          <a
            href="https://www.linkedin.com/in/tanmaya-sharma/"
            className="text-blue-400"
          >
            Click here
          </a>
          <br />
          You be the Arbiter of Truth the readers of The Metaverse Street
          Journal.
          <br /> Yours sincerely, Tan and the MSJ Team
        </div>
        <div className="flex justify-center gap-10 text-4xl">
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
