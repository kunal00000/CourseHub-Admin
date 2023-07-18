import { Button, Center, Group, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <nav>
        <Group position="apart" className="m-10 mx-24">
          <Text className="text-3xl font-bold">CourseHub</Text>
          <Group>
            <Link to="/login">
              <Button variant="subtle" color="cyan">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" color="cyan">
                Start for free
              </Button>
            </Link>
          </Group>
        </Group>
      </nav>
      <Center h={"65vh"}>
        <Group position="apart" className="w-[85vw]">
          <div>
            <Text fw={700} lineClamp={2} className="text-5xl text-bold">
              Build supercharged <br />
              online courses
            </Text>
            <Text className="my-7">
              Create custom courses, build beautiful no-code websites, or launch
              <br />
              your own app — all using just CourseHub.
            </Text>
            <Group className="" spacing="sm">
              <Link to="/register">
                <Button variant="outline" color="teal">
                  Start for free
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="light">Book a demo</Button>
              </Link>
            </Group>
          </div>
          <div>
            <Image
              width={540}
              height={490}
              fit="contain"
              src={
                "https://www.engagedigital.ai/sites/default/files/2021-12/radisys_cpaas_teacher_diagram_hero_v2.png"
              }
              alt="CourseHub"
              caption="Over 100K+ creators have launched their online
              teaching businesses using CourseHub."
            />
          </div>
        </Group>
      </Center>
    </div>
  );
};

export default Landing;
