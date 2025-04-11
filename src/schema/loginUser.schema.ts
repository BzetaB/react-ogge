import {z} from "zod";

export const loginSchema = z.object({
    email: z.string().email("Email invalido"),
    password: z.string().regex(/^(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
         "Contraseña incorrecta")
})

export type LoginRequest = z.infer<typeof loginSchema>

export const jwtResponseSchema = z.object({
    accessToken: z.string(),
    tokenType: z.string(),
    roles: z.array(z.string()),
});

export type LoginResponse = z.infer<typeof jwtResponseSchema>;