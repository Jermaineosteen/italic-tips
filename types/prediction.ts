export interface Prediction {
  id: string;
  match_name: string;
  market: string;
  prediction: string;
  odds: number;
  kickoff_time: string;
  status: "pending" | "won" | "lost" | "void";
  category: "football" | "basketball" | "tennis";
  featured: boolean;
  created_at: string;
}