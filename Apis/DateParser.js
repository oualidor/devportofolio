let months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];


const DataParser = {
     toString : (date)=>{
        let d = new Date(date)
        return months[d.getMonth()] + " " + d.getFullYear()
    }
}


export default DataParser
