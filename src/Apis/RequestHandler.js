const RequestHandler = {
    async GET(URL, token) {
        const controller = new AbortController();
        setTimeout(() => controller.abort(), 0);
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', authorization: 'Bearer ' + token},
            authorization: 'Bearer ' + token,
            timeout: 5
        };
        try{
            const response = await fetch(URL, requestOptions);
            const data = await response.json();
            return data
        }catch (error){
            return {finalResult: false, error: error}
        }
    },

    async  POST(URL, DATA, token) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', authorization: 'Bearer ' + token},
            body: JSON.stringify(DATA),
        };
        try{
            const response = await fetch(URL, requestOptions);
            const data = await response.json();
            return data
        }catch (error){
            return {finalResult: false, error: "Check you connection or try again later"}
        }

    },
}




export default RequestHandler
