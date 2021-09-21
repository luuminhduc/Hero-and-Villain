import axios from 'axios';
import * as actions from './actionTypes';

export const fetchCharacter = (id) => async dispatch => {
    const res = await axios.get(`https://superheroapi.com/api/1438141713222051/${id}`)
    await dispatch({
        type: actions.FETCH_CHARACTER,
        payload: res.data,
    })    
}


export const updateCount = () => {
    return{
        type: actions.UPDATE_COUNT
    }
}