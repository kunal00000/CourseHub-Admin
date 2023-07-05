import { UnstyledButton, Group, ThemeIcon, Text } from "@mantine/core";
import {
  IconBrandGoogleAnalytics,
  IconBrandGooglePodcasts,
  IconCertificate,
} from "@tabler/icons-react";
import React from "react";

interface RedirectProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

export const Redirect = ({ icon, color, label }: RedirectProps) => {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.md,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          color: "black",
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.teal[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} size={"1.3rem"} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="md">{label}</Text>
      </Group>
    </UnstyledButton>
  );
};

export function MainLinks() {
  return (
    <div>
      <Redirect
        icon={<IconBrandGooglePodcasts />}
        color={"orange"}
        label={"Overview"}
      />
      <Redirect icon={<IconCertificate />} color={"yellow"} label={"Courses"} />
      <Redirect
        icon={<IconBrandGoogleAnalytics />}
        color={"lime"}
        label={"Analytics"}
      />
    </div>
  );
}
