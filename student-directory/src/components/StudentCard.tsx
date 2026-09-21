import type { Student } from "../types";

type StudentCardProps = {student: Student};

function StudentCard({ student }: StudentCardProps) {
  return (
    <div className="student-card">
      <h2>{student.name}</h2>
      <p>{student.course}</p>
      <p>Age: {student.age}</p>
    </div>
  );
}
export default StudentCard;