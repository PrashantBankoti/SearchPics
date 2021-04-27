import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID VnaqsxJAA354Hpk3H2pNtT9IEHubDZOIz9RDq88-0Wk'
    }
});