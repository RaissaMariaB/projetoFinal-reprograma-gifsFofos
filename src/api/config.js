import axios from 'axios'

const config = axios.create({
    baseURL:'http://api.giphy.com/v1/gifs'
})


export default config