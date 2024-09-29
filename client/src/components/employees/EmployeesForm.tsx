import { Employee } from "@/model/Employee.model";
import { SyntheticEvent, useState } from "react";

interface CreateEmployeeFormProps {
  onEmployeeAdd: (employee: Employee) => Promise<string | undefined>;
}

function EmployeesForm({ onEmployeeAdd }: CreateEmployeeFormProps) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (name && position && salary) {
      const newEmpl = {
        name: name,
        position: position,
        salary: salary,
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const id = await onEmployeeAdd(newEmpl as any);
      console.log("created empl with id " + id);
    }
  };

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>position</label>
        <input
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <br />
        <label>salary</label>
        <input
          id="salary"
          value={salary}
          onChange={(e) => setSalary(Number(e.target.value))}
        />
        <br />
        <button>Add employee</button>
      </form>
    </div>
  );
}
export default EmployeesForm;
