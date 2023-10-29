import { Typography, Button } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function ContentSectionOne() {
  return (
    <ThemeProvider>
      <section className="py-16 px-8 lg:py-28">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="row-start-2 mt-12 lg:row-auto lg:mt-0 lg:pr-12">
            <Typography variant="h2" color="blue-gray" className="mb-6">
            Prospective Students
            </Typography>
            <Typography variant="lead" color="gray" className="mb-12">
            Learn to discover something new, bring your own ideas to life, work in interdisciplinary teams, and build international networks that last a lifetime.
            </Typography>
            <div className="inline-flex flex-wrap gap-3">
              <Button variant="outlined" color="dark" size="lg">
                Learn More
              </Button>
              <Button color="dark" size="lg">our process</Button>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1680285251132-e1c238bf5e75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="team work"
            className="max-h-[50vh] w-full rounded-xl object-cover object-center md:max-h-[75vh]"
          />
        </div>
      </section>
    </ThemeProvider>
  );
}

export default ContentSectionOne;
