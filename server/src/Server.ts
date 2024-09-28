import express, { NextFunction, Request, Response } from "express";
import employeesRouter from "./api/employees/Employee.route";
import reportsRouter from "./api/reports/Reports.route";

const port = 8002;

export class Server {
  private app = express();

  startServer() {
    this.app.use("/employees", employeesRouter);
    this.app.use("/reports", reportsRouter);

    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        res.send(err.message);
        next();
      }
    );

    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

new Server().startServer();
