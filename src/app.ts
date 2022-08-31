import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import cors from "cors";
import battleRouter from "./routes/battleRouter.js";
import rankingRouter from "./routes/rankingRouter.js";

const app = express();
app.use(cors(), json());

app.use(battleRouter);
app.use(rankingRouter);

app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`));
