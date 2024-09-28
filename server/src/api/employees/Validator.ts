import { Response, Request, NextFunction } from "express";
import { Employee } from "./Employee.model";

export function validateAsEmployee(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const requestBody = req.body;
    if (!(requestBody as Employee).name) {
      throw new FieldError("Name is required");
    }

    if (
      !["Manager", "HR", "Engineer"].includes(
        (requestBody as Employee).position
      )
    ) {
      throw new FieldError("Invalid position");
    }

    if (!(requestBody as Employee).salary) {
      throw new FieldError("Salary is required");
    }

    const parseBody: Partial<Employee> = {
      name: requestBody.name,
      position: requestBody.position,
      salary: requestBody.salary,
    };
    req.body = parseBody;
    next();
  } catch (err) {
    if (err instanceof FieldError) {
      res.status(400);
    }
    next(err);
  }
}

class FieldError extends Error {}
