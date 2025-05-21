import express from 'express';
import dotenv from "dotenv";
import helmet from "helmet";
import path from "path";
import {clearUrls, indexMessage, listSlugs, urlRedirect, urlShortner} from "./controller/indexController";

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", indexMessage);
app.post("/shortner", urlShortner);
app.get("/list", listSlugs);
app.get("/clear", clearUrls);
app.get("/:slug", urlRedirect);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on link http://localhost:${process.env.PORT || 3000}`);
});
