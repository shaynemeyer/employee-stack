import { Response, Request, NextFunction } from "express";
import { z, ZodError } from "zod";

const employeeSchema = z.object({
  name: z.string(),
  position: z.enum(["Manager", "HR", "Engineer"]),
  salary: z.number(),
  employedAt: z.date().optional(),
  id: z.string().optional(),
});

// type ZodEmployee = z.infer<typeof employeeSchema>;

export function validateAsEmployee(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    employeeSchema.parse(req.body);
    next();
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(400);
    }
    next(err);
  }
}
