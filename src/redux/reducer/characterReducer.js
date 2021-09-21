import * as actions from '../action/characterAction/actionTypes';
const initialState = {
    characterList:[],
    start:1,
    end:20,
}

export default function characterReducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case actions.FETCH_CHARACTER: return {...state, characterList: [...state.characterList, payload]}
        case actions.UPDATE_COUNT: return{...state, start:state.start+20, end:state.end+20}
        default: return state;
    }
}