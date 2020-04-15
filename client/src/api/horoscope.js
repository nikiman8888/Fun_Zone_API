export default {

    get: (sign) => {
        let url = '';
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