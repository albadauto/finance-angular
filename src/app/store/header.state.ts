import { createAction, createReducer, on } from "@ngrx/store";

export interface IHeader{
    login: string;
}

export const headerInitialState: IHeader = {
    login: 'nao-logado'
}

export const loginAction = createAction('[Login] create login action')
export const unsignAction = createAction('[Login] unsign login action')


export const loginReducer = createReducer(
    headerInitialState,
    on(loginAction, (state) => {
        state = {
            ...state, 
            login: 'logado'
        }
        return state;
    }),
    on(unsignAction, (state) => {
        state ={
            ...state,
            login: 'não logado'
        }
        return state;
    })
)