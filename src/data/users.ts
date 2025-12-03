export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  status: "active" | "inactive";
  createdAt: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "Tejas Ukalkar",
    email: "tejas@gmail.com",
    role: "admin",
    status: "active",
    createdAt: "2024-01-21",
  },
  {
    id: 2,
    name: "Riya Sharma",
    email: "riya.sharma@example.com",
    role: "editor",
    status: "inactive",
    createdAt: "2024-02-12",
  },
  {
    id: 3,
    name: "Aman Verma",
    email: "aman@gmail.com",
    role: "viewer",
    status: "active",
    createdAt: "2024-03-05",
  },
  {
    id: 4,
    name: "Neha Kulkarni",
    email: "neha@company.com",
    role: "editor",
    status: "active",
    createdAt: "2024-03-20",
  },
  {
    id: 5,
    name: "Rohit Patil",
    email: "rohit@domain.com",
    role: "viewer",
    status: "inactive",
    createdAt: "2024-04-10",
  },
  {
    id: 6,
    name: "Priya Singh",
    email: "priya@gmail.com",
    role: "admin",
    status: "active",
    createdAt: "2024-04-27",
  },
  {
    id: 7,
    name: "Sanjay Mehta",
    email: "sanjay@corp.com",
    role: "editor",
    status: "active",
    createdAt: "2024-05-13",
  },
  {
    id: 8,
    name: "Meera Pathak",
    email: "meera@hotmail.com",
    role: "viewer",
    status: "active",
    createdAt: "2024-05-20",
  },
  {
    id: 9,
    name: "Jay Thakur",
    email: "jay@gmail.com",
    role: "viewer",
    status: "inactive",
    createdAt: "2024-06-02",
  },
  {
    id: 10,
    name: "Sneha Bhosale",
    email: "sneha@company.com",
    role: "admin",
    status: "active",
    createdAt: "2024-06-11",
  },
];
