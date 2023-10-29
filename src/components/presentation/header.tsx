import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import {
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

export function HeroPresentation() {
 
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white relative px-8 py-8 lg:mb-36">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left pt-32">
            <div className="mb-8 inline-flex items-center">
              <Typography
                variant="small"
                className="mr-3 py-0.5 px-3 font-bold text-dark uppercase border-r border-dark"
              >
                New
              </Typography>
              <Typography
                color="dark"
                variant="small"
                className="flex items-center font-bold uppercase"
              >
                Faculty of Economics and Business Education
              </Typography>
            </div>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 lg:mr-32 leading-tight font-black"
            >
              International Class <span className="text-blue">Program</span>
            </Typography>
            <Typography variant="lead" color="blue-gray" className="lg:pr-32">
            The UPI International Undergraduate Program is an educational program that requires students to be active in various global academic activities. Students who take part in this program will experience an international educational atmosphere. Apart from that, the Undergraduate International Program is part of UPI's efforts to serve prospective Indonesian students who come from high schools with non-national curricula. It is hoped that this wider service will provide good opportunities for Indonesian citizens abroad to study at the Faculty of Economics and Business Education.
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="">
                <Button color="dark" className="flex items-center">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <img src="header2.svg" alt="components" className="absolute -top-10 right-0 w-1/2" />
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroPresentation;
