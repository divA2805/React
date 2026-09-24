import type { employee } from "../types/employee"
 
 
interface EmployeeCardProp {
  employee : employee
}
 
const EmployeeCard = ({employee} : EmployeeCardProp) => {
  return (
    <>
    <div className="employee-card">
    <p>Name:{employee.name}</p>
    <p>{employee.email}</p>
    <p>{employee.phone}</p>
    <p>Address : {employee.address.street} {employee.address.suite} {employee.address.city} {employee.address.zipcode}</p>
</div>
    </>
  )
}
 
export default EmployeeCard