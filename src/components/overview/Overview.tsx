import { SimpleGrid, Text, Image, Flex } from "@mantine/core";
import CourseCardCompact from "../course/CourseCardCompact";
import { ProgressCard } from "./ProgressCard";
import { Link } from "react-router-dom";
// import { Course } from "../../types/course";

const courses = [
  {
    id: "1",
    title: "TikTok Dance Moves Masterclass",
    description: "Unlock your potential to become a viral TikTok dancer.",
    imageLink: "https://example.com/tiktokdancemoves.jpg",
    price: 25,
    published: true,
    updatedAt: "2023-06-15",
  },
  {
    id: "2",
    title: "How to loose all your money in stock market",
    description:
      "Learn how to loose all your money in the stock market in 5 easy steps.",
    imageLink: "https://example.com/coffee-fuel.jpg",
    price: 40,
    published: false,
    updatedAt: "2023-06-15",
  },
  {
    id: "3",
    title: "Procrastination Techniques for Engineers",
    description:
      "Learn advanced techniques to delay tasks until the last possible moment while still meeting deadlines.",
    imageLink: "https://example.com/procrastination.jpg",
    price: 90,
    published: true,
    updatedAt: "2023-06-15",
  },
  {
    id: "4",
    title: "The Art of Stack Overflow: Finding Answers to All Your Problems",
    description:
      "Master the skill of searching and copy-pasting code snippets from Stack Overflow.",
    imageLink: "https://example.com/stackoverflow-art.jpg",
    price: 70,
    published: false,
    updatedAt: "2023-06-15",
  },
  {
    id: "5",
    title: "Meetings: How to Look Engaged While Actually Thinking About Code",
    description:
      "Learn the art of nodding and smiling during meetings while your mind is deep in code logic.",
    imageLink: "https://example.com/meetings-code.jpg",
    price: 50,
    published: true,
    updatedAt: "2023-06-15",
  },
];

const Overview = () => {
  // const Overview = ({ courses }: { courses: Course[] }) => {
  return (
    <div>
      <Text size={"xl"} m={"xl"} weight={"bolder"}>
        Overview
      </Text>

      <Image m={"xl"} h={200} fit="contain" withPlaceholder src={null} />
      <Text size={"xl"} weight={"bold"} mt={"2rem"} ml={"1.8rem"} mb={"1rem"}>
        My Courses
      </Text>
      <Flex>
        <SimpleGrid w={"45vw"} cols={1} mx={"xl"}>
          {courses.length > 0
            ? courses.map((course) => {
                return (
                  <Link key={course.id} to={`?id=${course.id}`}>
                    <CourseCardCompact course={course} />
                  </Link>
                );
              })
            : ""}
        </SimpleGrid>
        <ProgressCard courses={courses} />
      </Flex>
    </div>
  );
};

export default Overview;
