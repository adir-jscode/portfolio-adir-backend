import express, { Request, Response } from "express";
import { router } from "./app/routes";
import { notFound } from "./app/middlewares/notFound";
const app = express();

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ success: true, message: "Welcome to adir's backend server" });
});

app.use(notFound);
export default app;
