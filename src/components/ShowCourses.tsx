import { AppShell, Navbar, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { MainLinks } from "./Redirect";
import { User } from "./User";
import { useUser } from "../hooks/useUser";

function ShowCourses() {
  // const [courses, setCourses] = useState([]);
  const [username, setUsername] = useState("");

  const { data } = useUser();
  useEffect(() => {
    if (data) {
      setUsername(data);
    }
  }, [data]);

  // Add code to fetch courses from the server
  // and set it in the courses state variable.
  return (
    <div>
      <AppShell
        layout="alt"
        padding="md"
        navbar={
          <Navbar
            width={{ base: 280 }}
            height={"98vh"}
            p="xs"
            m={"sm"}
            className="rounded-xl shadow-md"
          >
            <Navbar.Section mb={36}>
              <Text className="text-2xl font-bold">CourseHub-Admin</Text>
            </Navbar.Section>
            <Navbar.Section>
              <MainLinks />
            </Navbar.Section>
            <Navbar.Section m={"auto"} mb={0}>
              <User username={username} />
            </Navbar.Section>
          </Navbar>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        hello
      </AppShell>
      {/* Dashboard Courses Create New Course My Categories My Courses My Progress */}
    </div>
  );
}

export default ShowCourses;
