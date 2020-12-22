import React from 'react';
import * as ACTION_TYPES from './actiontypes';
 
export const login_success = () => {
    return{
        type: ACTION_TYPES.LOGIN_SUCCESS
    }
}


export const login_failure = () => {
    return{
        type: ACTION_TYPES.LOGIN_FAILURE
    }
}