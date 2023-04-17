const initState:InitThemeStateType = {
    themeId: 1,
}

export type InitThemeStateType={
    themeId:number
}

type ActionType=ChangeThemeIdType

export const themeReducer = (state = initState, action: ActionType): InitThemeStateType => { // fix any
    switch (action.type) {
        // дописать
            case 'SET_THEME_ID':
                return{...state,themeId:action.id}
        default:
            return state
    }
}

type ChangeThemeIdType={
    type:string
    id:number
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({type: 'SET_THEME_ID', id}as const) // fix any
