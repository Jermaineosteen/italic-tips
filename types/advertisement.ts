export interface Advertisement {
    id: string;
    title: string;
    image_url: string;
    target_url: string;
    position: "homepage" | "before_footer" | "history" | "hero" | "between_predictions";
    priority: number;
    active: boolean;
    start_date: string | null;
    end_date: string | null;
    created_at: string; 
}