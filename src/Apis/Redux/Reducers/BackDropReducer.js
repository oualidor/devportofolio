import {HideBackDrop, MountBackDrop, PushNotification, RemoveNotification} from '../Actions/Types';

const BackDropReducer = (state = {Component : null, props: {}, mount: false}, action) => {
    switch (action.type) {
        case MountBackDrop:
            document.body.style.overflow = "hidden"
            return {
                ...state,
                mount: true,
                Component: action.Component,
                props: action.props
            };
            break;
        case HideBackDrop:
            document.body.style.overflow = "auto"
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
