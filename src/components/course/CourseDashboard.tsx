import { Course } from "../../types/course";
import { SimpleGrid, Text } from "@mantine/core";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";

const CourseDashboard = ({ courses }: { courses: Course[] }) => {
  return (
    <>
      <Text size={"xl"} m={"xl"} weight={"bolder"}>
        Courses
      </Text>
      <SimpleGrid m={"xl"} cols={3}>
        {courses.map((course) => (
          <Link to={`${course.id}`}>
            <CourseCard key={course.id} course={course} />
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
};

export default CourseDashboard;
