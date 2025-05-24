import express from 'express';
import dotenv from "dotenv";
import helmet from "helmet";
import path from "path";
import cors from "cors";
import indexRouter from "./routes/apiRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on link http://localhost:${process.env.PORT || 3000}`);
});
