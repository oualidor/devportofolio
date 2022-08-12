let months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

let sMonths = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];


const DataParser = {
     toString : (date)=>{
        let d = new Date(date)
        return months[d.getMonth()] + " " + d.getFullYear()
    },
    toMid : (date)=>{
        let d = new Date(date)
        return sMonths[d.getMonth()] + " " + d.getFullYear()
    }
}


export default DataParser
