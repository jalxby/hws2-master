import {UserType} from "../HW8";

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const comparator = (a: UserType, b: UserType) => {
                return action.payload === 'up' ? (a.name < b.name) ? -1 : 1 : (a.name > b.name) ? -1 : 1
            }
            const newState = [...state]
            return newState.sort(comparator) // need to fix
        }
        case 'check': {

            return state.filter(s => s.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
