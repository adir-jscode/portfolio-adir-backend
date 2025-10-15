import { Router } from "express";
import { blogControllers } from "./blog.controller";

const router = Router();

router.post("/add-blog", blogControllers.addBlog);

export const BlogRoutes = router;
