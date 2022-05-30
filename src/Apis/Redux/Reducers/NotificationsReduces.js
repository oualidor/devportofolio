import {PushNotification, RemoveNotification} from '../Actions/Types';
import {connect, useDispatch, useSelector} from "react-redux";

const PushNotificationReducer = (state = {list : []}, action) => {

    switch (action.type) {
        case PushNotification:
            let newList = state.list
            newList.push(action.payLoad)

            return {
                ...state,
                list: newList
            };
            break;
        case RemoveNotification:
            let id = action.id
            let oldList = state.list

                for (let i = 0; i < oldList.length; i++){
                    try{
                        const notification = oldList[i];
                        if(notification.id === id ) {
                            delete  oldList[i]
                        }
                    }
                    catch (e){

                    }
                }


            return {
                ...state,
                list: oldList
            };
            break;

        default:
            return state;
    }
}

export default PushNotificationReducer
