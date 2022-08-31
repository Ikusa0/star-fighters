import { Request, Response } from "express";

export async function getRanking(req: Request, res: Response) {
  try {
    const ranking = { fighters: [] };
    res.send(ranking);
  } catch (err) {
    console.error("Error while battling", err.message);
    res.sendStatus(500);
  }
}
