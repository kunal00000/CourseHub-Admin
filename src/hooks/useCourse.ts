import { useQuery, useMutation, useQueryClient } from "react-query";
import { getCourses, postCourse } from "../services/course";
import { CourseForm } from "../types/course";
import { SuccessNotification } from "../utils/notification";
import { useNavigate } from "react-router-dom";

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
