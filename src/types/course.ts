export type Course = {
  _id: string;
  title: string;
  description: string;
  imageLink: string;
  price: number;
  published: boolean;
  updatedAt: string;
};

export type CourseForm = {
  title: string;
  description: string;
  imageLink: string;
  price: number | "";
  published: boolean;
};
