import {Router} from 'express'
import pkg from "../../package.json";

const router = Router()

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to InstaYA API",
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    author: pkg.author,
  });
});

export default router