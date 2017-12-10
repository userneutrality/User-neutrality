import {INCREASE_RANKING,
        RANKING_INCREASED,
        LOAD_TOP,
        TOP_LOADED,
        } from '../constants/actionTypes.js';

export function increaseRanking(message) {
    return dispatch => {
        dispatch({type: INCREASE_RANKING});
        return fetch('/service/ranking/increase',
                        { method: 'PUT',
                          body: JSON.stringify({content: message.content}),
                          headers: { 'Content-Type': 'application/json' }
                        })
                .then(() => dispatch({type: RANKING_INCREASED}));
    };
}

export function loadTop(limit) {
    return dispatch => {
        dispatch({type: LOAD_TOP});
        return fetch(`/service/ranking?limit=${limit}`)
               .then(response => response.json())
               .then(json => dispatch({type: TOP_LOADED, top: json}));
    }
}
