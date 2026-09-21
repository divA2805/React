import type { Student } from "../types";
import StudentCard from "./StudentCard";

type StudentListProps = {
  students: Student[];
};

function StudentList({ students }: StudentListProps) {
  return (
    <div>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default StudentList;
