import { z } from "zod";

export const contactInputSchema = z.object({
  name: z.string().trim().min(2).max(100),
  contact: z.string().trim().min(5).max(255),
  message: z.string().trim().min(10).max(1000),
});
