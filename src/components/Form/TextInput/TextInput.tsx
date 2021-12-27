import {ChangeEvent, useState} from "react";
import './TextInput.css';

export type InputTextValue = string | undefined | number;

export interface TextInputProps {
    value?: InputTextValue;
    onChange?: (value: InputTextValue) => void
    placeholder?: string;
}

export const TextInput = (
    {
        value,
        onChange,
        placeholder
    }: TextInputProps
) => {

    const [state, setState] = useState<InputTextValue>(value)

    const setValue = (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    }
    return (
        <div className={'inputText'}>
            <label>{placeholder}</label>
            <input
                type="text"
                onChange={setValue}
                value={state}
            />
        </div>
    );

}