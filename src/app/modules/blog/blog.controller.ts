import { NextFunction, Request, Response } from "express";
import { blogServices } from "./blog.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
const addBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const blog = await blogServices.addBlog(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Blog added successfully",
      data: blog,
    });
  } catch (error) {
    next(error);
  }
};

export const blogControllers = { addBlog };
