import { Employee } from "@/model/Employee.model";

interface EmployeesListProps {
  employees: Employee[];
}

function EmployeesList({ employees }: EmployeesListProps) {
  const renderedEmployees = employees.map((employee) => {
    return (
      <tr key={employee.name}>
        <td>{employee.name}</td>
        <td>{employee.salary}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>{renderedEmployees}</tbody>
    </table>
  );
}
export default EmployeesList;
