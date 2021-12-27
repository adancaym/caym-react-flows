import {ChangeEvent} from "react";
import './SelectInput.css'

export type ValueSelect = {
    key: string | number;
    value: string;
}

interface SelectInputProps {
    values?: ValueSelect[];
    onChange?: (value: ValueSelect) => void;
    placeholder?: string;
}

export const SelectInput = (
    {
        values = [],
        onChange = (value) => {
            console.log(value);
        },
        placeholder = ''
    }: SelectInputProps) => {
    return (
        <div className={'inputSelect'}>
            <label>{placeholder}</label>
            <select onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(JSON.parse(event.target.value))}>
                {values?.length > 0
                    ? values.map(v => <option value={JSON.stringify(v)}> {v.key} </option>)
                    :  <option> Sorry no options </option>
                }
            </select>
        </div>

    )
}