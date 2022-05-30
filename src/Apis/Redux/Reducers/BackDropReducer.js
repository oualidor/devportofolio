import {HideBackDrop, MountBackDrop, PushNotification, RemoveNotification} from '../Actions/Types';

const BackDropReducer = (state = {Component : null, props: {}, mount: false}, action) => {
    switch (action.type) {
        case MountBackDrop:
            return {
                ...state,
                mount: true,
                Component: action.Component,
                props: action.props
            };
            break;
        case HideBackDrop:
            return {
                ...state,
                Component: null,
                props: action.props,
                mount: false,
            }
            break;
        default:
            return state;
    }
}

export default BackDropReducer
