import { IBoardGameViewModel } from "../models/viewModels/IBoardGameViewModel";
import { boardGameRepository } from "../repository/boardGameRepository";

export const boardGameService = {
  async getAllBoardGames(): Promise<IBoardGameViewModel[]> {
    return await boardGameRepository.getallBoardGame();
  },
};
