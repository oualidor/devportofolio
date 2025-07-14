import {useState} from "react";

const MoreOrLess = ({expanded, height, children}) => {
     const [more, setMore] = useState(expanded);
     const style = {
         container: {
             position: 'relative',
             width: '100%',

         },
         child: {
             padding: 20,
             height: more ? height:'auto',
             overflow: 'hidden',
         },
         action: {

             position: 'absolute', right: 0,

         },
         actionButton: {
             cursor: 'pointer',
             color: 'white',
             padding: '10px',
             backgroundColor: "transparent"
         }
     }

     const Toggle = () => {
        setMore(!more)
     }
     return (

         <div style={style.container}>
             <div style={style.child}>
                 {
                     children
                 }
             </div>

             <div style={style.action}>
                 <button  onClick={Toggle} style={style.actionButton}> {more? 'Show Less': 'Show More'}</button>
             </div>
         </div>

    )
 }

 export default MoreOrLess
