export default {

    get: (lat,lng) => {
        let url = 'https://cors-anywhere.herokuapp.com/http://api.timezonedb.com/v2.1/get-time-zone?key=33QRWPM55KYN&format=json&by=position&lat='+lat+'&lng='+lng;
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
            // credentials: 'include'
        })           
            .catch(console.error);

    }

}