import {useEffect, useState} from "react";
import {getOneCarrier} from "../../services";
import MultiStatesView from "../MultiStatesView/MultiStatesView";
import MobileSingleCarrierDetails from "./MobileSingleCarrierDetails/MobileSingleCarrierDetails";
import SingleCarrierDetails from "./SingleCarrierDetails/SingleCarrierDetails";


export default function CarrierDetails({id}) {
    let [state, setState] = useState(0)
    let [carrier, setCarrier] = useState({skills: [], company: {}, projects: [{images: []}]})

    function loadData() {
        setState(0)
        getOneCarrier(id)
            .then(carrier =>{
                console.log('===============================================')
                console.log(carrier)
                setCarrier(carrier)
                setState(1)
            })
            .catch(e=>{
                setState(-1)
            })
    }

    useEffect(() => {
        loadData()
    }, [id]);

    return(
        <MultiStatesView state={state} dataLoader={loadData}>
            <>
                <MobileSingleCarrierDetails carrier={carrier}></MobileSingleCarrierDetails>
                <SingleCarrierDetails carrier={carrier}></SingleCarrierDetails>
            </>
        </MultiStatesView>
    )
}
