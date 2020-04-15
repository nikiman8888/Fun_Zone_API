export default {

    get: (city) => {
        let apiKey = 'fcb525a1e9b930083ea25ac1a24a9401';
        
        let apiCaller = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
        return fetch(apiCaller, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
           // credentials: 'include'
        })   
    }
}

