import { NextFunction, Request, Response } from "express";
import { IBoardGameViewModel } from "../models/viewModels/IBoardGameViewModel";

export const boardGameController = {
  async getAllBoardgames(
    req: Request,
    res: Response<IBoardGameViewModel>,
    next: NextFunction
  ) {},
};
