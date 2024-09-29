import { Employee } from "@/model/Employee.model";

const URL = `${import.meta.env.VITE_API_URL}/employees/`;

export async function createEmployee(employee: Employee) {
  const result = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });

  const jsonResult = await result.json();

  if (!result.ok) {
    const message = jsonResult[0].message;
    throw new Error(message);
  }

  return jsonResult.id;
}

export async function getEmployees(): Promise<Employee[]> {
  const result = await fetch(URL, {
    method: "GET",
  });
  const jsonResult = await result.json();
  return jsonResult;
}
