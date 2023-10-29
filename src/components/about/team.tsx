import {
  Card,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

interface TeamCardPropsType {
  img: string;
  name: string;
  title: string;
  desc: string;
}

function TeamCard({ img, name, title, desc }: TeamCardPropsType) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} shadow={false} className="!m-0 !mb-6 h-64">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover object-top"
        />
      </CardHeader>
      <Typography variant="h4" color="blue-gray" className="mb-1">
        {name}
      </Typography>
      <Typography color="gray" className="mb-3 font-normal">
        {title}
      </Typography>
      <Typography color="gray" className="mb-4 font-normal">
        {desc}
      </Typography>
      <div className="flex items-center">
        <IconButton variant="text" color="light-blue">
          <i className="fa-brands fa-twitter text-lg not-italic" />
        </IconButton>
        <IconButton variant="text" color="blue">
          <i className="fa-brands fa-linkedin text-lg not-italic" />
        </IconButton>
        <IconButton variant="text" color="pink">
          <i className="fa-brands fa-dribbble text-lg not-italic" />
        </IconButton>
      </div>
    </Card>
  );
}

const members = [
  {
    img: "https://fpeb.upi.edu/img/zi/zi21.png",
    name: "Prof. Dr. H. Eeng Ahman, MS.",
    title: "Dean",
    desc: "Today you are you! That is truer than true! There is no one alive!",
  },
  {
    img: "https://fpeb.upi.edu/img/zi/zi22.png",
    name: "Prof. Dr. Vanessa Gaffar, SE., Ak., MBA",
    title: "Vice Dean for Academic Affairs",
    desc: "And I love you like Kanye loves Kanye. We need to restart that.",
  },
  {
    img: "https://fpeb.upi.edu/img/p1.png",
    name: "Dr. Toni Heryana, S.Pd., MM., CRA., CRP",
    title: "Vice Dean for Resources",
    desc: "Artist is a term applied to a person who engages in an activity",
  },
  {
    img: "https://fpeb.upi.edu/img/zi/zi10.png",
    name: "Dr. Lili Adi Wibowo, S.Pd., S.Sos., MM.",
    title: "Vice Dean for Student Affairs",
    desc: "Success is not final, failure is not fatal: it is the courage to continue",
  },
];

export function TeamSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-16">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <Typography color="dark" className="mb-2 !font-semibold text-lg">
          Organization Structure
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            You are into a great Faculty
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto lg:w-8/12 lg:px-20 text-blue-gray-800"
          >
            
          </Typography>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSectionOne;
