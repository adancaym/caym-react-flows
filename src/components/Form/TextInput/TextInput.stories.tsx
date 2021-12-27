import {ComponentStory, ComponentMeta} from '@storybook/react';
import {TextInput} from "./TextInput";

export default {
    title: 'Inputs',
    component: TextInput,
} as ComponentMeta<typeof TextInput>;


export const InputText: ComponentStory<typeof TextInput> = () => <TextInput placeholder={'text'}  />;
    