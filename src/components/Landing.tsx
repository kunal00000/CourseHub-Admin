/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
import { Button, Group, Text, Image, Center } from "@mantine/core";

const Landing = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <nav>
        <Group position="apart" className="m-10 mx-24">
          <Text className="text-3xl font-bold">CourseHub</Text>
          <Group>
            <a href="/login">
              <Button variant="subtle" color="cyan">
                Login
              </Button>
            </a>
            <a href="/register">
              <Button variant="outline" color="cyan">
                Start for free
              </Button>
            </a>
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
              <a href="/register">
                <Button variant="outline" color="teal">
                  Start for free
                </Button>
              </a>
              <a href="/register">
                <Button variant="default">Book a demo</Button>
              </a>
            </Group>
          </div>
          <div>
            <Image
              width={540}
              height={490}
              fit="contain"
              src={"https://graphy.com/images/herofeature1.png"}
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
