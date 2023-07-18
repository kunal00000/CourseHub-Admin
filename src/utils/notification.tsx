import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

export const ErrorNotification = (message: string) => {
  notifications.show({
    id: "error",
    withCloseButton: true,
    autoClose: 6000,
    title: "Error",
    message: message,
    color: "red",
    icon: <IconX />,
    radius: "md",
    withBorder: true,
  });
};

export const SuccessNotification = (message: string) => {
  notifications.show({
    id: "success",
    withCloseButton: true,
    autoClose: 6000,
    title: "Success",
    message: message,
    color: "teal",
    icon: <IconCheck />,
    radius: "md",
    withBorder: true,
  });
};
