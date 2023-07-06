import { AppShell, Navbar, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { MainLinks, Redirect } from "./Redirect";
import { User } from "./User";
import { useUser } from "../hooks/useUser";
import Overview from "./overview/Overview";
import { IconSquareRoundedPlus } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Dashboard() {
  // const [courses, setCourses] = useState([]);
  const [username, setUsername] = useState("");

  const { data } = useUser();
  useEffect(() => {
    if (data) {
      setUsername(data);
    }
  }, [data]);

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
            <Navbar.Section>
              <Link to={"/dashboard/create"}>
                <Redirect
                  icon={<IconSquareRoundedPlus />}
                  color={"lime"}
                  label={"Create Course"}
                />
              </Link>
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
        <Overview />
      </AppShell>
    </div>
  );
}

export default Dashboard;
