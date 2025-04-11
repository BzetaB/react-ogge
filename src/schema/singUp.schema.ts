import {z} from "zod";

export const sinUgpSchema = z.object({
    name: z.string().min(3,"El nombre es requerido"),
    lastname: z.string().min(3,"El apellido es requerido"),
    email: z.string().email("Email invalido"),
    cellphone: z
    .string()
    .regex(/^\d{9}$/, "Numero de celular invalido. Debe tener 9 dígitos"),
    password: z.string().regex(/^(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
         "La contraseña tiene que tener al menos 8 carácteres y al menos un dígito"),
    idType: z.enum(["DNI","CE"], {
        required_error: "Seleccione su documento de identidad"
    }),
    idNumber: z.string(),
}).refine(
    (data) => {
        if(data.idType === "DNI"){
            return /^\d{8}$/.test(data.idNumber);
        }
        if(data.idType === "CE"){
            return /^[a-zA-Z0-9]{9,12}$/.test(data.idNumber);
        }
        return false;
    },  
    {
        message: "Numero de Documento invalido segun el tipo seleccionado",
        path: ["idNumber"],
    }
);

export type SingUpFormValues = z.infer<typeof sinUgpSchema>