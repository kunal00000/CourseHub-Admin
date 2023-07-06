import { AppShell, Navbar, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { MainLinks } from "./Redirect";
import { User } from "./User";
import { useUser } from "../hooks/useUser";
import Overview from "./overview/Overview";
import { Route, Routes } from "react-router-dom";
import CourseDashboard from "./course/CourseDashboard";

function Dashboard() {
  // const [courses, setCourses] = useState([]);
  const [username, setUsername] = useState("");

  const { data } = useUser();
  useEffect(() => {
    if (data) {
      setUsername(data);
    }
  }, [data]);
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
            className="rounded-xl shadow-lg"
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
        <Routes>
          <Route
            path="/dashboard/overview"
            element={<Overview courses={courses} />}
          />
          <Route
            path="courses"
            element={<CourseDashboard courses={courses} />}
          />
        </Routes>
        {/* <Overview /> */}
      </AppShell>
      {/* Dashboard Courses Create New Course My Categories My Courses My Progress */}
    </div>
  );
}

export default Dashboard;