import { Course } from "../../types/course";
import { SimpleGrid, Text } from "@mantine/core";
import CourseCard from "./CourseCard";

const CourseDashboard = ({ courses }: { courses: Course[] }) => {
  return (
    <>
      <Text size={"xl"} m={"xl"} weight={"bolder"}>
        Courses
      </Text>
      <SimpleGrid m={"xl"} cols={3}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CourseDashboard;
