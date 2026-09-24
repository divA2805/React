import type { employee } from "../types/employee";
import { getEmployee } from "../services/employeeService";
import { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
const EmployeeList = () => {
  const [users, setUsers] = useState<employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [value, setValue] = useState<string>("");
  async function getdata() {
    try {
      setLoading(true);
      const data = await getEmployee();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    getdata();
  }, []);
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  const filteredEmp = users.filter((user) => {
    return user.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <>
      <h1 className="page-title">Employees</h1>
      <input
        type="text"
        placeholder="search employees...."
        value={value}
        onChange={handleChange}
        className="search-input"
      />
      {loading ? (
        <div className="loading-container">
          <p className="loading-text">LOADING...</p>
        </div>
      ) : (
        <div className="employee-list">
          {filteredEmp.map((user) => (
            <EmployeeCard key={user.id} employee={user} />
          ))}
        </div>
      )}
    </>
  );
};

export default EmployeeList;
