import { IGamePreview } from "../../types/game.type";

export abstract class FeaturedGames {
  public static getFeaturedGames() : IGamePreview[] {
    return []
  }
}