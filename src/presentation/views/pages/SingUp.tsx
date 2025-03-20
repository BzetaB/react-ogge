import { useForm } from "react-hook-form";
import { SingUpFormValues, sinUgpSchema } from "../../../schema/singUp.schema";
import { Input } from "../../components/ui/Input"
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/ui/button";
import { SingleSelect } from "../../components/ui/SingleSelect";

export const SingUp = () => {

    const documentOptions = [
        { value: "DNI", label: "DNI" },
        { value: "CE", label: "Carnet de Extranjería" },
    ];


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
    } = useForm<SingUpFormValues>({
        resolver: zodResolver(sinUgpSchema)
    }
    );

    const onSubmit = handleSubmit(data => {
        const result = sinUgpSchema.safeParse(data)

        if (!result.success) {
            console.log("Errores en la validacion", result.error.format());
            return;
        }

        alert("Registrado correctamente");
        console.log(data);
        reset()
    })

    return (
        <form className="flex flex-col gap-6 md:flex-row max-w-7xl mx-auto"
            onSubmit={onSubmit}>
            <section className="flex flex-col gap-3 flex-1">
            </section>
            <section className="flex flex-col gap-4 flex-1 p-4 bg-amber-900 rounded-xl self-start w-full">
                <h2 className="font-semibold text-start text-xl px-5">
                    Registrate como Egresado
                </h2>
                <div className="flex gap-2 px-5 justify-between">
                    <div className="flex flex-col gap-0.5 w-full">
                        <Input
                            label="Nombres"
                            name="name"
                            type="text"
                            placeholder="Juan"
                            error={errors.name?.message}
                            register={register}
                            classname="w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-0.5 w-full">
                        <Input
                            label="Apellidos"
                            name="lastname"
                            type="text"
                            placeholder="Perez"
                            error={errors.lastname?.message}
                            register={register}
                            classname="w-full"
                        />
                    </div>
                </div>
                <div className="flex gap-2 px-5 justify-between">
                    <div className="flex flex-col gap-0.5 w-full">
                        <SingleSelect
                            options={documentOptions}
                            label="DNI/CE"
                            name="idType"
                            control={control}
                            placeholder="Tipo de documento"
                            error={errors.idType?.message}
                        />
                    </div>
                    <div className="flex flex-col gap-0.5 w-full">
                        <Input
                            label="Documento"
                            name="idNumber"
                            type="number"
                            placeholder="DNI o CE"
                            error={errors.idNumber?.message}
                            register={register}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-0.5 px-5">
                    <Input
                        label="Celular (+51)"
                        name="cellphone"
                        type="number"
                        placeholder="987654321"
                        error={errors.cellphone?.message}
                        register={register}
                    />
                </div>
                <div className="flex flex-col gap-0.5 px-5">
                    <Input
                        label="Correo Electrónico"
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                        error={errors.email?.message}
                        register={register}
                    />
                </div>
                <div className="flex flex-col gap-1 px-5">
                    <Input
                        label="Contraseña"
                        name="password"
                        type="password"
                        placeholder="***************"
                        error={errors.password?.message}
                        register={register}
                    />
                    <p className="text-sm font-light text-gray-600">
                        La contrasenia debe de tener al menos 8 caracteres incluyendo un numero o una letra.
                    </p>
                </div>
                <div className="flex flex-col px-5">
                    <Button
                        type="submit"
                        label="Registrarse" />
                </div>
            </section>
        </form>
    )
}