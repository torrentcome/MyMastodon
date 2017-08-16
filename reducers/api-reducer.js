import { INIT_API } from '../actions/action-types';

export const APIReducer = (state = [], action) => {
    switch(action.type) {
        case INIT_API:
            return Object.assign({}, action.api);
        default:
            return state;
    }
}