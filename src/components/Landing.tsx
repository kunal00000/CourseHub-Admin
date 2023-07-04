/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
import { Button, Group } from "@mantine/core";

const Landing = () => {
  return (
    <div className="w-[100vw]">
      <nav>
        <Group position="apart" className="m-10 mx-24">
          <span className="text-3xl font-bold">Graphy</span>
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
      <h1>Welcome to course selling website!</h1>
      <br />
    </div>
  );
};

export default Landing;
