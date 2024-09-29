import { Employee } from "@/model/Employee.model";
import { useState, useEffect } from "react";
import EmployeesList from "./EmployeesList";
import { createEmployee, getEmployees } from "@/services/DataService";
import EmployeesForm from "./EmployeesForm";

function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  const onEmployeeAdd = async (employee: Employee) => {
    setErrorMessage("");

    try {
      const id = await createEmployee(employee);
      setEmployees([...employees, employee]);
      return id;
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      const employees = await getEmployees();
      setEmployees(employees);
    };
    fetchEmployees();
  }, []);
  return (
    <div>
      <EmployeesForm onEmployeeAdd={onEmployeeAdd} />
      {errorMessage ? (
        <label style={{ color: "red" }}>{errorMessage}</label>
      ) : null}
      <EmployeesList employees={employees} />
    </div>
  );
}
export default Employees;
