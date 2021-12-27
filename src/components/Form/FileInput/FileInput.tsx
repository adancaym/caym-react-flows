import {ChangeEvent} from "react";
import './FileInput.css'
export interface FileInputProps {
    onChange?: (value: FileList | null)=> void;
    placeholder?: string;
}

export const FileInput = ({onChange,placeholder}: FileInputProps)=> {
    
    
    return (
        <div className={'inputFile'}>
            <label>{placeholder}</label>
            <input type="file" onChange={(event:ChangeEvent<HTMLInputElement>)=> onChange ? onChange(event.currentTarget.files) : false}/>
        </div>
    );
    
}