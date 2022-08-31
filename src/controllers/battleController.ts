import { Request, Response } from "express";
import * as apiService from "../services/apiService.js";
import * as battleRepository from "../repositories/battleRepository.js";

export async function battle(req: Request, res: Response) {
  try {
    const users = req.body;

    const firstUserStars = Number(await apiService.getUserStargazersCount(users.firstUser));
    const secondUserStars = Number(await apiService.getUserStargazersCount(users.secondUser));

    let winner: string | null = null;
    let loser: string | null = null;
    let draw: boolean = false;

    if (firstUserStars > secondUserStars) {
      winner = users.firstUser;
      loser = users.secondUser;
    }

    if (firstUserStars < secondUserStars) {
      winner = users.secondUser;
      loser = users.firstUser;
    }

    if (firstUserStars === secondUserStars) {
      draw = true;
    }

    res.send({ winner, loser, draw });
  } catch (err) {
    console.error("Error while battling", err.message);
    res.sendStatus(500);
  }
}
