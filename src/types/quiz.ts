export interface Move {
  move_name: string;
  level: number;
}

export interface PokemonData {
  id: number;
  name: string;
  moves: Move[];
}

export interface QuizItem {
  id: number;
  pokemon: string;
  level: number;
  correct: string;
  dummy: string[];
  generation?: string;
}

export type GameStatus = 'START' | 'QUIZ' | 'RESULT';
export type Generation = 'rb' | 'gs' | 'rs' | 'dp' | 'all';
