import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

function FeatureCard({ icon, title, children }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        {icon}
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          color="blue-gray"
          className="px-8 font-normal text-gray-700"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon1.png" />
    ),
    title: "Management",
    description:
      "the school employs an innovative learning system to embrace global business challenges. We demand leaders with the ability to drive Asian businesses to the forefront of the world economy. We offer an advanced curriculum and strong international networks. We use the case study method and English as our first language in learning activities.",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon2.png" />
    ),
    title: "Accounting",
    description:
      "designed to nurture competent graduates who are equipped with comprehensive accounting knowledge and practices, noble character based on Islamic values, and adaptive work skills to compete in the dynamic global business environment and disruptive technological advances in the digital era.",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon3.png" />
    ),
    title: "Islamic Economics and Finance",
    description:
      "It was designed to produce experts in Islamic economics who can become policy makers, researchers, and professionals in various sub-sectors of the Shariah economy, such as monetary, fiscal, banking, and finance with international experience and exposure.",
  }
];

export function FeatureLanding() {
  return (
    <section className="px-4 mt-12">
      <div className="container mx-auto mb-20 text-center">
        <div className="flex justify-center align-center relative z-5">
          <Typography color="dark" className="text-xl mr-2 font-normal">
             Study Program Offered
          </Typography>
          
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureLanding;
