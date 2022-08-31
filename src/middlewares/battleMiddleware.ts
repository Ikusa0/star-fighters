import { Request, Response, NextFunction } from "express";
import * as apiService from "../services/apiService.js";

export async function validateUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const users = req.body;

    if (!await apiService.validateUser(users.firstUser)) {
      return res.sendStatus(404);
    }

    if (!await apiService.validateUser(users.secondUser)) {
      return res.sendStatus(404);
    }

    next();
  } catch (err) {
    console.error("Error while validating users", err.message);
    res.sendStatus(500);
  }
}
