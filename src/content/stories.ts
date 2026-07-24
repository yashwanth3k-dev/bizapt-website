import {
  Briefcase,
  Landmark,
  Megaphone,
  Settings2,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type { BlogPost, BlogSection, UseCase, SolutionRow, KpiRow } from "./types";

export { useCases, getUseCase } from "./useCases";
export { blogPosts, getBlogPost } from "./blogPosts";

export const useCaseIcons: Record<string, LucideIcon> = {
  finance: Landmark,
  sales: TrendingUp,
  operations: Settings2,
  marketing: Megaphone,
  leadership: Briefcase,
};
