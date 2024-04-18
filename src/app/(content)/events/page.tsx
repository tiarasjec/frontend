"use client";
import Container from "@/components/shared/container";
import { Link, LinkProps } from "@/components/ui/hover/link";

const categories: LinkProps[] = [
  {
    heading: "Cultural",
    subheading: "Dance, Music, Drama, and more",
    image: "/categories/cultural.png",
    href: "/events/cultural",
  },
  {
    heading: "Technical",
    subheading: "Coding, Robotics, and more",
    image: "/categories/technical.png",
    href: "/events/technical",
  },
  {
    heading: "Non-Technical",
    subheading: "Quizzes, Debates, and more",
    image: "/categories/nontechnical.png",
    href: "/events/nontechnical",
  },
  {
    heading: "Mega",
    subheading: "The grandest of them all",
    image: "/categories/mega.png",
    href: "/events/mega",
  },
];

export default function EventsPage() {
  return (
    <>
      <Container className="mx-auto pt-16">
        <div className="py-4 mx-6 sm:mx-12 space-y-4 mt-10 pt-10">
          <h1 id="about" className="text-center text-4xl font-tiara">
            Events categories
          </h1>
        </div>
      </Container>
      <div className="px-4 sm:px-8 md:px-16 lg:px-24">
          {categories.map((category, index) => (
            <Link
              key={index}
              heading={category.heading}
              subheading={category.subheading}
              image={category.image}
              href={category.href}
            />
          ))}
      </div>
    </>
  );
}
