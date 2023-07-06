import axiosClient from "../api/axiosClient";
import { CourseForm } from "../types/course";

export async function getCourses() {
  const response = await axiosClient.get("admin/courses");
  if (response.status === 200) {
    return response.data;
  }
}

export async function postCourse(course: CourseForm) {
  const response = await axiosClient.post("admin/courses", course);
  if (response.status === 200) {
    return response.data;
  }
}

export async function updateCourse(id: string, course: CourseForm) {
  const response = await axiosClient.put(`admin/courses/${id}`, course);
  if (response.status === 200) {
    return response.data;
  }
}
