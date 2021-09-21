import * as actions from './actionTypes';

export const startLoading = () => {
    return {type: actions.START_LOADING}
}
export const stopLoading = () => {
    return {type: actions.STOP_LOADING}
}