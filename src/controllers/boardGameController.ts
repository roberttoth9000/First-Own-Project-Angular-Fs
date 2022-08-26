import { NextFunction, Request, Response } from "express";
import { IBoardGameViewModel } from "../models/viewModels/IBoardGameViewModel";
import { boardGameService } from "../services/boardGameService";

export const boardGameController = {
  async getAllBoardgames(
    _req: Request,
    res: Response<IBoardGameViewModel[]>,
    next: NextFunction
  ) {
    await boardGameService
      .getAllBoardGames()
      .then((data) => {
        return res.json(data);
      })
      .catch((err) => {
        console.log(err);
        next(err);
        return;
      });
  },
};
