import {
  Card,
  Center,
  Group,
  RingProgress,
  ThemeIcon,
  UnstyledButton,
  Text,
  Badge,
} from "@mantine/core";
import { Course } from "../../types/course";
import { IconCertificate } from "@tabler/icons-react";

export const ProgressCard = ({ courses }: { courses: Course[] }) => {
  const publishedCourses = courses.filter((course) => course.published);
  return (
    <Card p={"md"} m={"md"} w={350} h={300} shadow="md">
      <RingProgress
        size={150}
        thickness={16}
        label={
          <Center>
            <ThemeIcon color="teal" variant="light" radius="xl" size="xl">
              <IconCertificate size={28} />
            </ThemeIcon>
          </Center>
        }
        sections={[
          {
            value: Math.floor((publishedCourses.length * 100) / courses.length),
            color: "yellow",
            tooltip: "Published Courses",
          },
          {
            value: Math.floor(
              ((courses.length - publishedCourses.length) * 100) /
                courses.length
            ),
            color: "lime",
            tooltip: "Unpublished Courses",
          },
        ]}
        m={"auto"}
      />
      <Group position="center" my={"sm"}>
        <Text size="xs" color="dimmed">
          Total Courses: {courses.length}
        </Text>
      </Group>
      <Group position="center">
        {[
          {
            category: "Published",
            color: "yellow",
            len: publishedCourses.length,
          },
          {
            category: "!Published",
            color: "lime",
            len: courses.length - publishedCourses.length,
          },
        ].map((item) => (
          <UnstyledButton>
            <Group spacing={"xs"}>
              <Badge
                color={item.color}
                size="lg"
                radius={"xl"}
                variant="dot"
              ></Badge>
              <div>
                <Text size={"sm"}>{item.category}</Text>
                <Text size="xs" color="dimmed">
                  {item.len}/{courses.length}
                </Text>
              </div>
            </Group>
          </UnstyledButton>
        ))}
      </Group>
    </Card>
  );
};
