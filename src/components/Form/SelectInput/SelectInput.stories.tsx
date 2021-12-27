import {ComponentStory, ComponentMeta} from '@storybook/react';
import {SelectInput} from "./SelectInput";

export default {
    title: 'Inputs',
    component: SelectInput,
} as ComponentMeta<typeof SelectInput>;


export const InputSelect: ComponentStory<typeof SelectInput> = () => <SelectInput placeholder={'number'} />;
