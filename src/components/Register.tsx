import { useState } from "react";
import { Button, Text, Input, PasswordInput, Group, Card } from "@mantine/core";
import { IconLock, IconAt } from "@tabler/icons-react";
import { postSignup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { ErrorNotification } from "../utils/notification";

// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleEmail(e: any) {
    setEmail(e.target.value);
  }
  function handlePassword(e: any) {
    setPassword(e.target.value);
  }

  async function onSignup() {
    try {
      const signupResponse = await postSignup(email, password);
      if (signupResponse.message === "Admin created successfully") {
        navigate("/courses");
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
          Register to the website
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
        <Button onClick={onSignup} variant="outline" color="teal">
          Sign up
        </Button>
      </Group>
      <Group>
        <Text size={"sm"} className="ml-auto">
          Already a user?
          <a href="/login">
            <Button variant="light" compact>
              Login
            </Button>
          </a>
        </Text>
      </Group>
    </Card>
  );
}

export default Register;
