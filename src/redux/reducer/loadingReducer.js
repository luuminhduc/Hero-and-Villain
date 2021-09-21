import * as actions from '../action/loadingAction/actionTypes';

const initialState = {
    isLoading:false
}

export default function loadingReducer(state=initialState,action ){
    const {type} = action;
    switch(type) {
        case actions.START_LOADING: return {...state, isLoading:true};
        case actions.STOP_LOADING: return{...state,isLoading:false};
        default: return state;
    }
}