import { SimpleGrid, Text, Image, Flex } from "@mantine/core";
import CourseCardCompact from "../course/CourseCardCompact";
import { ProgressCard } from "./ProgressCard";
import { Link } from "react-router-dom";
import { Course } from "../../types/course";

const Overview = ({ courses }: { courses: Course[] }) => {
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
                  <Link to={`?id=${course.id}`}>
                    <CourseCardCompact key={course.id} course={course} />
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
