import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Modal} from "./Modal";

export default {
    title: 'Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;


export const ModalSimple: ComponentStory<typeof Modal> = () => <Modal><h1>Saluda</h1></Modal>;

export const ModalSmall: ComponentStory<typeof Modal> = () => <Modal size={'sm'}><h1>Saluda</h1></Modal>;

export const ModalMedium: ComponentStory<typeof Modal> = () => <Modal size={'md'}><h1>Saluda</h1></Modal>;

export const ModalLarge: ComponentStory<typeof Modal> = () => <Modal size={'lg'}><h1>Saluda</h1></Modal>;

export const ModalCustomElementTrigger: ComponentStory<typeof Modal> = () => <Modal>{{
    elementTrigger: (<span>Click</span>),
    body: (<h1>Holi</h1>)
}}</Modal>;
