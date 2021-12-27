import { useState} from "react";
import './NumberInput.css';

export type InputNumberValue = number | undefined;

export interface NumberInputProps {
    value?: InputNumberValue;
    onChange?: (value: InputNumberValue) => void
    placeholder?: string;
}

export const NumberInput = (
    {
        value,
        onChange,
        placeholder
    }: NumberInputProps
) => {

    const [state, setState] = useState<InputNumberValue>(value)

    return (
        <div className={'inputNumber'}>
            <label>{placeholder}</label>
            <input
                type="number"
                value={state}
                onChange={({target})=> onChange ? onChange(Number(target.value)) : true}
            />
        </div>
    );
}