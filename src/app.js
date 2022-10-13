import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import helmet from "helmet";

// Routes
import TasksRoutes from "./routes/tasks.routes";
import indexRoutes from "./routes/index.routes";
import productRoutes from "./routes/products.routes.js";
import usersRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import requestsRoutes from './routes/requests.routes.js';
import packageRoutes from './routes/package.routes.js';

const app = express();

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
const corsOptions = {
    // origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.get("/", indexRoutes);
app.use("/api/tasks", TasksRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/requests", requestsRoutes);
app.use("/api/packages", packageRoutes);

export default app;