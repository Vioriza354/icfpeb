import React from "react";
import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function PalettePresentation() {

  const data = [
    {
      label: "General Requirements",
      value: "General Requirements",
      desc: `
      • Citizen of the Republic of Indonesia (WNI) For Foreign Citizens (WNA), Registration and Selection are carried out by the UPI Directorate of International Affairs via the https://dia.upi.edu/ page. 
      • Graduates of SMA/MA/SMK/Package C in 2023, 2022 and 2021.     
      • Are physically and mentally healthy that do not interfere with the learning in the 
      selected study program`,
    },
    {
      label: "Specific Requirements",
      value: "Specific Requirements",
      desc: `Applicants of SM FPEB UPI must meet special requirement that is able to speak 
      English actively (lectures are held in English). This ability is demonstrated by a 
      minimum TOEFL score of 500 or IELTS Minimum Overall Score of 5.5 or Duolinggo 
      Minimum Score of 95-100, except for Foreign Graduates who have used English as 
      the Language of Instruction in the previous school for at least 2 years. Applicants must 
      complete the Evidence no later than the end of semester 2 when participants attend 
      lectures`,
    },
   
  ];
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="hidden lg:flex">
            <img src="fpeb11.svg" alt="iphone" className="max-w-xl rounded-3xl mx-auto" />
          </div>
          
          <div className="text-center lg:text-left">
            <Typography
              color="blue"
              className="flex items-center justify-center lg:justify-start !font-bold text-lg mb-5"
            >
              Unlock your Business Potential
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              REQUIREMENTS
            </Typography>
            <Tabs value="html" orientation="vertical">
      <TabsHeader className="w-30">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="py-0">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
            
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default PalettePresentation;
