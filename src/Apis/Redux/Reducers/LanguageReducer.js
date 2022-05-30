import {PushNotification, RemoveNotification, SetLanguage} from '../Actions/Types';
import {connect, useDispatch, useSelector} from "react-redux";

const LanguageReducer = (state = {i18n : {}}, action) => {

    switch (action.type) {
        case SetLanguage:
            return {
                ...state,
                i18n: action.i18n
            };
            break;

        default:
            return state;
    }
}

export default LanguageReducer
