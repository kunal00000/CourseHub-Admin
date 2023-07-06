import { Card, Image, Text, Badge, Group, Button } from "@mantine/core";
import type { Course } from "../../types/course";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Card shadow="sm" padding="md" radius="lg" w={320}>
      <Card.Section>
        <Image src={course.imageLink} height={230} withPlaceholder />
      </Card.Section>

      <Group my={"xs"}>
        <Text weight={500}>{course.title}</Text>
        {course.published ? (
          <Badge color="blue" variant="light">
            Published
          </Badge>
        ) : (
          <Badge color="red" variant="light">
            Unpublished
          </Badge>
        )}
        <Badge color="yellow" radius={"xs"} variant="filled">
          {course.price}$
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {course.description}
      </Text>

      <Text size={"xs"} color="dimmed" mt={"md"}>
        {course.updatedAt}
      </Text>
      {!course.published ? (
        <Button variant="default" color="dark" fullWidth mt="md" radius="md">
          Publish Now
        </Button>
      ) : (
        ""
      )}
    </Card>
  );
}
