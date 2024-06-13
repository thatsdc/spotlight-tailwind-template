import React, { useRef } from "react";
import { ReactComponent as TwitterIcon } from "../assets/socials-icons//icons8-twitter.svg";
import { ReactComponent as GitHubIcon } from "../assets/socials-icons/icons8-github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/socials-icons/icons8-linkedin.svg";
import { ReactComponent as InstagramIcon } from "../assets/socials-icons/icons8-instagram.svg";
import { ReactComponent as EmailIcon } from "../assets/socials-icons/email-svgrepo-com.svg";
import { ReactComponent as BagIcon } from "../assets/ui-icons/noun-work-bag-4681180.svg";
import PlanetariaIcon from "../assets/cv-icons/planetaria.ecd81ade.svg";
import AirbnbIcon from "../assets/cv-icons/airbnb.b4000690.svg";
import FacebookIcon from "../assets/cv-icons/facebook.dd9e7d48.svg";
import StarbucksIcon from "../assets/cv-icons/starbucks.4a5bd050.svg";

import CvListElement from "../components/CvListElement";
import ArticlePreview from "../components/ArticlePreview";

function Home() {
  const emailInput = useRef(null);
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(emailInput.current.value);
    // redirect to thanks for subscribing
  };

  const onCVButtonClick = () => {
    // download the CV
  };

  return (
    <div className="md:px-10 lg:px-20 overflow-hidden sm:overflow-visible">
      <div className="px-4 ">
        <img
          src="https://img.freepik.com/premium-vector/illustration-person-waving_498048-103.jpg"
          alt="profile"
          className="aspect-auto h-full w-16 rounded-full mb-6"
        />
        <h1 className="text-zinc-800 dark:text-zinc-100 text-3xl sm:text-5xl font-bold w-full lg:w-4/6 mb-6">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-base w-full lg:w-4/6 mb-6">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>
        <ul className="flex gap-3 mb-8">
          <li className="mb-5">
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="h-6 w-6 fill-zinc-500 dark:fill-zinc-400 hover:fill-zinc-600 transition dark:hover:fill-zinc-300 " />
            </a>
          </li>

          <li className="mb-5">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="h-6 w-6 fill-zinc-500 dark:fill-zinc-400 hover:fill-zinc-600 transition dark:hover:fill-zinc-300 " />
            </a>
          </li>
          <li className="mb-5">
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="h-6 w-6 fill-zinc-500 dark:fill-zinc-400 hover:fill-zinc-600 transition dark:hover:fill-zinc-300 " />
            </a>
          </li>
          <li className="mb-5">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="h-6 w-6 fill-zinc-500 dark:fill-zinc-400 hover:fill-zinc-600 transition dark:hover:fill-zinc-300 " />
            </a>
          </li>
        </ul>
      </div>
      <div className="relative flex justify-center gap-6">
        <div className="w-44 sm:w-72 aspect-[9/10] bg-contain  rounded-2xl overflow-hidden flex-none rotate-2">
          <img
            src={require("../assets/images/SpaceX--e1569850545866.jpeg")}
            alt="coding"
            className="h-full  object-cover"
          />
        </div>
        <div className="w-44 sm:w-72 aspect-[9/10] bg-contain  rounded-2xl overflow-hidden flex-none -rotate-2">
          <img
            src={require("../assets/images/coding-significato.jpg")}
            alt="coding"
            className="h-full object-cover"
          />
        </div>
        <div className="w-44 sm:w-72 aspect-[9/10] bg-contain  rounded-2xl overflow-hidden flex-none rotate-3">
          <img
            src={require("../assets/images/group-presentation-business.jpg")}
            alt="coding"
            className="h-full object-cover"
          />
        </div>
        <div className="w-44 sm:w-72 aspect-[9/10] bg-contain  rounded-2xl overflow-hidden flex-none rotate-6">
          <img
            src={require("../assets/images/highest-mountains-in-the-world-everest.jpg")}
            alt="coding"
            className="h-full object-cover"
          />
        </div>
        <div className="w-44 sm:w-72 aspect-[9/10] bg-contain  rounded-2xl overflow-hidden flex-none -rotate-2">
          <img
            src={require("../assets/images/comment-travailler-en-équipe.png")}
            alt="coding"
            className="h-full  object-cover"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 mt-24 mb-4 w-full">
        <div className="col-start-1">
          <ArticlePreview
            title="Hello world!"
            description="A Python-based project revolving around Acidanthera's OpenCorePkg and Lilu for both running and unlocking features in macOS on supported and unsupported Macs."
          />
          <ArticlePreview
            title="Hello world!"
            description="A Python-based project revolving around Acidanthera's OpenCorePkg and Lilu for both running and unlocking features in macOS on supported and unsupported Macs."
          />
          <ArticlePreview
            title="Hello world!"
            description="A Python-based project revolving around Acidanthera's OpenCorePkg and Lilu for both running and unlocking features in macOS on supported and unsupported Macs."
          />
        </div>
        <div className="lg:col-start-2 md:ml-10 px-4">
          <form
            onSubmit={onFormSubmit}
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mb-14"
          >
            <div className="flex items-center mb-4">
              <EmailIcon className="w-6 h-6 fill-zinc-400 dark:fill-zinc-700 mr-4" />
              <h1 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Stay up to date
              </h1>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Get notified when I publish something new, and unsubscribe at any
              time.
            </p>
            <div className="flex">
              <input
                ref={emailInput}
                required
                type="email"
                className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                placeholder="Email address"
              />
              <button className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none">
                Join
              </button>
            </div>
          </form>
          <div className="w-full rounded-2xl mb-14  border border-zinc-100 p-6 dark:border-zinc-700/40 ">
            <div className="flex items-center">
              <div className="relative w-8 aspect-square mr-4">
                <BagIcon className="w-full fill-zinc-400 dark:fill-zinc-700  absolute" />
              </div>
              <h1 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Work
              </h1>
            </div>
            <ul className="w-full">
              <CvListElement
                svgIcon={PlanetariaIcon}
                company="Planetaria"
                position={"CEO"}
                years={"2019 - Present"}
              />
              <CvListElement
                svgIcon={AirbnbIcon}
                company="Airbnb"
                position={"Product Designer"}
                years={"2014 - 2019"}
              />
              <CvListElement
                svgIcon={FacebookIcon}
                company="Facebook"
                position={"iOS Softare Engineer"}
                years={"2011 - 2014"}
              />
              <CvListElement
                svgIcon={StarbucksIcon}
                company="Starbucks"
                position={"Shift Supervisor"}
                years={"2008 - 2011"}
              />

              <button
                onClick={onCVButtonClick}
                className="w-full text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-800/80 hover:bg-zinc-100 dark:hover:bg-zinc-800/100 hover transition-colors font-semibold  rounded-xl text-sm p-2"
              >
                Download CV
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
