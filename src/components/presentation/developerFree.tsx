import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function DevPresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white py-20">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="mb-8">
            <Typography
              color="blue"
              className="flex items-center font-bold text-lg mb-5"
            >
              
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 leading-tight"
            >
              OBJECTIVE
            </Typography>
            <Typography color="blue-gray" className="lg:pr-32">
            The International Class Independent Selection Faculty of Economics and Business 
Education, Indonesian University of Education (SM FPEB UPI) 2023 aims to select
excellent prospective students by providing opportunities for the community to become 
UPI students, and contributing to improving the quality of education. The UPI 
Independent Selection was carried out to facilitate the large number of prospective 
students who have high potential to study in international classes. By taking part in the 
independent selection at UPI, it is expected that the prospective students with high 
potential will be able to achieve their goals and contribute to national development, 
especially in the field of education.
            </Typography>
          </div>
          <img src="https://www.upi.edu/images/upload/FPEB.jpeg" alt="components" className="mx-auto hidden md:flex" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DevPresentation;
