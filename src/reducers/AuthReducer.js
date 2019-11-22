// this reducer holds the state of every detail about the current user logged on

const INITIAL_STATE = {};

export const AuthReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case 'LOGIN_SUCCESS':
            return action.payload;
        case 'SIGNUP_SUCCESS':
            return action.payload
        default:
            return state;
    }
}