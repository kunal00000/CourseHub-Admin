import { Text } from "@mantine/core";
import { modals } from "@mantine/modals";

export function logoutModal() {
  modals.openConfirmModal({
    title: "Logout",
    centered: true,
    children: <Text size="sm">Do you want to logout?</Text>,
    labels: { confirm: "Logout", cancel: "Cancel" },
    confirmProps: { color: "red" },
    onConfirm: () => {
      console.log("logout");
      localStorage.removeItem("token");
      window.location.href = "/";
    },
  });
}
