import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", userRoutes.routes);

app.listen(5000, () => {
    console.log("Service running on port 5000");
});