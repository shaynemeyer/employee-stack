import { SimpleDb } from "../../data/SimpleDb";
import { Employee } from "./Employee.model";

export class EmployeeDataAccess {
  private employeeDataBase = new SimpleDb<Employee>();

  public async addEmployee(employee: Employee) {
    employee.employedAt = new Date();
    const id = await this.employeeDataBase.insert(employee);
    return id;
  }

  public async getEmployeeById(id: string) {
    const employee = await this.employeeDataBase.getBy("id", id);
    return employee;
  }

  public async getAllEmployees(): Promise<Employee[]> {
    return this.employeeDataBase.getAll();
  }
}
