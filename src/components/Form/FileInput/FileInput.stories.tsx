import {ComponentStory, ComponentMeta} from '@storybook/react';
import {FileInput} from "./FileInput";

export default {
    title: 'Inputs',
    component: FileInput,
} as ComponentMeta<typeof FileInput>;


export const InputFile: ComponentStory<typeof FileInput> = () => <FileInput placeholder={'File'} />;
