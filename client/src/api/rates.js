export default {

    get: () => {
        let url = 'https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest'
       //let url = `https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?symbols=${value1},${value2}`;
        return fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'text',             
            }
        })
        
        .catch(err => {
            console.log(err);
        });
    }
}


