import * as React from "react";
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { setSearchText } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const category = [
 "Frontend Developer",
  "Backend Developer",
  "Data Engineer",
  "Data Science",
  "Graphic Designer",
  "UI Developer",
  "Wordpress Developer",
  "Full Stack Developer",
  "Mobile App Developer",
  "DevOps Engineer",
  "Machine Learning Engineer",
  "Cybersecurity Specialist",
  "Database Administrator",
  "Network Engineer",
  "Product Manager",
  "Project Manager",
  "Software Tester",
  "System Administrator",
  "Technical Support",
  "IT Consultant",
  "Cloud Engineer",
  "Business Analyst",
  "Game Developer",
  "UX Designer",
  "Content Manager",
  "Digital Marketing Specialist",
  "SEO Specialist",
  "Data Analyst",
  "Blockchain Developer",
];

export function CategoryCarousel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const plugin = React.useRef(
    Autoplay({ loop: true ,stopOnInteraction:true})
  )

  return (
    <Carousel 
    plugins={[plugin.current]}
    className="w-full max-w-xl mx-auto my-20">
      <CarouselContent>
        {category.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Button
                onClick={() => {
                  dispatch(setSearchText(item));
                  navigate("/browse");
                }}
                variant="outline"
                className="rounded-full"
              >
                {item}
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
