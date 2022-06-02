import {MountBackDrop} from "./Apis/Redux/Actions/Types";
import StillUnderConstruction from "./components/StillUnderConstruction";
import {jsx} from "theme-ui";
import {useDispatch} from "react-redux";

const BackDropManager = {
    mountBackDrop: (dispatch, Component)=>{

        dispatch({type: MountBackDrop, Component: Component , props:{} ,test: "hi"})
    }
}

export default  BackDropManager
