import { InputHTMLAttributes, FC, HtmlHTMLAttributes } from "react";
import { FormInputLabel, Input, Group } from "./form-input.styles";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} />
            {
                <FormInputLabel shrink={Boolean(otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length)}>{label}</FormInputLabel>
            }
        </Group>
    )

}

export default FormInput;