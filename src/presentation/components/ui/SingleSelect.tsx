import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Select, { StylesConfig } from 'react-select';

interface Option {
    value: string,
    label: string;
}

interface Props<T extends FieldValues> {
    name: Path<T>;
    options: Option[];
    control: Control<T>;
    // Optionals
    label?: string;
    error?: string;
    placeholder?: string;
}

const getCustomStyles = (
    error?: string
): StylesConfig<Option, false> => ({
    control: styles => ({
        ...styles,
        display: 'flex',
        alignItems: 'center',
        border: error ? '1px solid #e53e3e' : '1px solid #e2e8f0',
        borderRadius: '6px',
    }),
    singleValue: styles => ({
        ...styles,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    }),
    valueContainer: styles => ({
        ...styles,
        display: 'flex',
        alignItems: 'center',
    }),
});

export const SingleSelect = <T extends FieldValues>({
    name,
    options,
    label,
    control,
    error,
    placeholder,
}: Props<T>) => {
    return (
        <div className="flex flex-col w-full">
            {label && (
                <label htmlFor={name} className="font-semibold text-base">
                    {label}:
                </label>
            )}
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Select
                        {...field}
                        options={options}
                        placeholder={placeholder}
                        isSearchable={false}
                        components={{
                            SingleValue: ({ data }) => (
                                <div className='flex items-center gap-2 h-auto'>
                                    {data.label}
                                </div>
                            ),
                        }}
                        onChange={selected => field.onChange(selected?.value)}
                        value={
                            options.find(option => option.value === field.value) || null}
                        className='w-full'
                        styles={getCustomStyles(error)}
                    />
                )}
            />
            {error && <span className='text-primary-red text-sm font-semibold pl-2'>{error}</span>}
        </div>
    )
}