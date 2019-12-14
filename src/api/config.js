import axios from 'axios'

const config = axios.create({
    baseURL:'https://api.giphy.com/v1/gifs'
})


export default config