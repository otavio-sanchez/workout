import { type, actionType, initialType } from './actionType';

const initialState: initialType = {
    list: []
};

export default (state = initialState, action: actionType): initialType => {
    switch (action.type) {
        case type.EXERCISES_ADD:
            return {
                ...state,
                list: state.list.concat(action.form).map((form, index) => ({...form, id: index})),
            };
        case type.EXERCISES_REMOVE:
            return {
                ...state,
                list: state.list.filter((form) => form.id !== action.form.id),
            };
        case type.EXERCISES_RESET:
            return {
                ...initialState,
            };
        default:
            return state;
    }
};