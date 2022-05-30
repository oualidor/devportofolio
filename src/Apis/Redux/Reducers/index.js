import { combineReducers } from 'redux';
import NotificationsReducer from './NotificationsReduces';
import BackDropReducer from "./BackDropReducer";
import LanguageReducer from "./LanguageReducer";

export default combineReducers({
    NotificationsReducer,
    BackDropReducer,
    LanguageReducer
});
