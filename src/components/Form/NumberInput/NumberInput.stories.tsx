import {ComponentStory, ComponentMeta} from '@storybook/react';
import {NumberInput} from "./NumberInput";

export default {
    title: 'Inputs',
    component: NumberInput,
} as ComponentMeta<typeof NumberInput>;


export const InputNumber: ComponentStory<typeof NumberInput> = () => <NumberInput placeholder={'number'} />;
