import { z } from "zod"

export const FooterSchema = z.object({
    empresa: z.string(),
    year: z.number(),
    email: z.string().email("Email invalido"),
    location: z.string(),
});

export type FooterSchema = z.infer<typeof FooterSchema>;