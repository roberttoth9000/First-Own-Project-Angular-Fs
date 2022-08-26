import { db } from "../data/connection";
import { IBoardGameViewModel } from "../models/viewModels/IBoardGameViewModel";

export const boardGameRepository = {
  async getallBoardGame(): Promise<IBoardGameViewModel[]> {
    return await db.query<IBoardGameViewModel[]>("SELECT * FROM boardgame", []);
  },
};
