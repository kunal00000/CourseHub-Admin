import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import { getCourses, postCourse, updateCourse } from "../services/course";
import { CourseForm } from "../types/course";
import { SuccessNotification } from "../utils/notification";

export function useCourses() {
  return useQuery({
    queryKey: "courses",
    queryFn: () => getCourses(),
  });
}

export function useCoursePostMutation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (course: CourseForm) => postCourse(course),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: "courses" });
      SuccessNotification("Course added successfully.");
      navigate("/dashboard/courses");
    },
    onError() {
      Error("Something went wrong, Please try again or contact admin.");
    },
  });
}

export function useCourseUpdateMutation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({ id, course }: { id: string; course: CourseForm }) =>
      updateCourse(id, course),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "courses" });
      SuccessNotification("Course updated successfully.");
      navigate("/dashboard/courses");
    },
    onError() {
      Error("Something went wrong, Please try again or contact admin.");
    },
  });
}
