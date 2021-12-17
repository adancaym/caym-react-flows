import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Navigation} from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";

export default {
    title: 'Navigation',
    component: Navigation,
} as ComponentMeta<typeof Navigation>;


export const NavigationHistory: ComponentStory<typeof Navigation> = () =>
    <BrowserRouter>
        <Navigation title={'Holi'} links={[
            {
                path: '/',
                label: 'initio',
                scope: 'public'
            },
            {
                path: '/',
                label: 'initio',
                scope: 'public'
            }
        ]}/>
    </BrowserRouter>
;
