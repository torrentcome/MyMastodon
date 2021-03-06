import axios from 'axios';

// Build API request method with current token
export const fetchUtils = {
    get: (token, path) => {
        return new Promise((resolve, reject) => {
            axios.get(path, { headers:
                {   'Authorization': `Bearer ${ token }`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then( response => {
                return resolve(response);
            }).catch(error => {
                console.error(error);
            });
        });
    }
}