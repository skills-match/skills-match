export interface ICareerResult {
    best_career: string;
    required_skills: string[];
    recommendations: {
      career: string;
      career_id: number;
      compatibility: number;
    }[];
    user_skills: string[];
  }
  