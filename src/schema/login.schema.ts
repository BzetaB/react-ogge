import {z} from "zod";

export const loginSchema = z.object({
    email: z.string().email("Email invalido"),
    password: z.string().regex(/^(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
         "Contraseña Incorrecta")
})

export type LoginFormValues = z.infer<typeof loginSchema>