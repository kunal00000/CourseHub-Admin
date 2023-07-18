import { useQuery } from "react-query";

import { getUsername } from "../services/auth";

export const useUser = () => {
  return useQuery<string | undefined, Error>({
    queryKey: "username",
    queryFn: () => getUsername(),
  });
};
