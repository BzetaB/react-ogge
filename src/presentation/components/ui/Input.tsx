import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";


interface Props<T extends FieldValues> {
    label: string;
    type: HTMLInputTypeAttribute;
    register: UseFormRegister<T>;
    name: Path<T>;

    placeholder?: string;
    error?: string;
    classname?: string;
    onChangeOverride?: ChangeEventHandler<HTMLInputElement>;
}

export const Input = <T extends FieldValues>({
    label,
    type,
    register,
    name,
    placeholder,
    error,
    classname,
    onChangeOverride
}: Props<T>) => {
    return (
        <>
            <label className="font-semibold text-base" htmlFor={name}>
                {label}
            </label>
            <input 
                type={type}
                id={name}
                className={`border bg-white rounded-md px-4 py-2 text-base outline-none ${error? 'border-red-500': 'border-stone-300'} ${classname}`}
                placeholder={placeholder}
                {...register(name, {
                    onChange: onChangeOverride
                })}
            />
            {error && (<p className="text-primary-red text-sm font-semibold pl-2">{error}</p>)}
        </>
    )
}