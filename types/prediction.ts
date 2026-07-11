export interface Prediction {
  id: string;
  match_name: string;
  country: string;
  prediction: string;
  kickoff_time: string;
  status: "pending" | "won" | "lost" | "void";
  category: "football" | "basketball" | "tennis";
  featured: boolean;
  created_at: string;
}