import { z } from "zod";

const phonePattern = /^[+()]\d[\d\s\-()/]{5,}$/;

export const contactFieldSchema = z
  .string()
  .trim()
  .min(5)
  .max(255)
  .refine(
    (value) =>
      value.includes("@")
        ? z.string().email().safeParse(value).success
        : phonePattern.test(value),
    "Érvényes e-mail címet vagy telefonszámot adj meg.",
  );

export const contactInputSchema = z.object({
  name: z.string().trim().min(2).max(100),
  contact: contactFieldSchema,
  message: z.string().trim().min(10).max(1000),
});
