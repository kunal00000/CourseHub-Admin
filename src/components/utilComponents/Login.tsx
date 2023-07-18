import { Button, Card, Group, Input, PasswordInput, Text } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { postLogin } from "../../services/auth";
import { ErrorNotification } from "../../utils/notification";

/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleEmail(e: any) {
    setEmail(e.target.value);
  }
  function handlePassword(e: any) {
    setPassword(e.target.value);
  }

  async function onLogin() {
    try {
      const loginResponse = await postLogin(email, password);
      if (loginResponse.message === "Logged in successfully") {
        navigate("/dashboard");
      }
    } catch (err: any) {
      console.log(err);
      ErrorNotification(err.response.data.message);
    }
  }

  return (
    <Card
      withBorder
      shadow="md"
      radius="md"
      className="w-[30vw] mx-auto my-[20vh]"
    >
      <Card.Section withBorder inheritPadding py={4} my={20}>
        <Text size={20} fw={700} color="teal">
          Login to admin dashboard
        </Text>
      </Card.Section>
      <Input.Wrapper withAsterisk label="Username" onChange={handleEmail}>
        <Input id="input-email" icon={<IconAt />} placeholder="Your username" />
      </Input.Wrapper>
      <br />
      <PasswordInput
        id="input-password"
        placeholder="Password..."
        label="Password"
        icon={<IconLock size="1rem" />}
        withAsterisk
        onChange={handlePassword}
        className=""
      />
      <Group position="center" className="my-4 mt-7">
        <Button onClick={onLogin} variant="outline" color="teal">
          Login
        </Button>
      </Group>
      <Group>
        <Text size={"sm"} className="ml-auto">
          New here?{" "}
          <Link to="/register">
            <Button variant="light" compact>
              Register
            </Button>
          </Link>
        </Text>
      </Group>
    </Card>
  );
}

export default Login;
