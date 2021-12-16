import {createContext, useReducer} from "react";


export type LoaderContextAction = {
    type: 'loading' | 'end';
}

export interface LoaderContextState {
    loading: boolean;
    startLoading: () => void;
    endLoading: () => void;
}

const initialState: LoaderContextState = {
    loading: false,
    startLoading: () => {
    },
    endLoading: () => {
    }
}

export const loaderContextReducer = (state: LoaderContextState, action: LoaderContextAction): LoaderContextState => {
    switch (action.type) {
        case 'loading': {
            return {...state, loading: true}
        }
        case 'end': {
            return {...state, loading: false}
        }
        default: {
            return state;
        }
    }
}

export const LoaderContext = createContext<LoaderContextState>(initialState);

export interface LoaderContextProviderProps {
    children: JSX.Element | JSX.Element[];
}


export const LoaderContextProvider = ({children}: LoaderContextProviderProps) => {

    const [{loading}, dispatch] = useReducer(loaderContextReducer, initialState);

    const startLoading = () => {
        dispatch({type: 'loading'})
    }
    const endLoading = () => {
        dispatch({type: 'end'})
    }
    return (
        <LoaderContext.Provider value={{
            loading,
            startLoading,
            endLoading
        }}>
            {children}
        </LoaderContext.Provider>
    )
}