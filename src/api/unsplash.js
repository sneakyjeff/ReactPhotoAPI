import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID b9de591a3504bc38552bacf7599fbb362821f6ccf03926e179fd277afa6846d7'
    }
});