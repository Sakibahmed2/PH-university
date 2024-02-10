import OfferedCourse from "../pages/faculty/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Offered course",
    path: "offered-course",
    element: <OfferedCourse />,
  },
];
