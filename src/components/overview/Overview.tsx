import { Flex, SimpleGrid, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";

import { useCourses } from "../../hooks/useCourse";
import { Course } from "../../types/course";
import CourseCardCompact from "./CourseCardCompact";
import { ProgressCard } from "./ProgressCard";

const Overview = () => {
  const { data, isLoading } = useCourses();
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (!isLoading && data.courses.length > 0) {
      setCourses(data.courses);
    }
  }, [isLoading, data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Text size={"xl"} px={"xl"} weight={"bolder"}>
        Overview
      </Text>
      <Flex m={"xl"} columnGap={"5vw"} className="relative">
        <Stack w={"35vw"} m={"xl"}>
          <Text size={"xl"} weight={"bold"}>
            My Courses
          </Text>
          <SimpleGrid cols={1}>
            {courses.length > 0
              ? courses.map((course) => {
                  return <CourseCardCompact key={course._id} course={course} />;
                })
              : ""}
          </SimpleGrid>
        </Stack>
        <Stack w={"35vw"} m={"xl"} className="fixed left-[67vw] ">
          <Text size={"xl"} weight={"bold"}>
            Progress
          </Text>
          <ProgressCard courses={courses} />
        </Stack>
      </Flex>
    </div>
  );
};

export default Overview;
