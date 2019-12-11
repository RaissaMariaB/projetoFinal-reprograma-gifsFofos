import config from './config'

function getGif(nameGif){
    const url = `/search?api_key=dc6zaTOxFjmzC&q=${nameGif}&limit=1`
    return config.get(url)
    console.log(url);
    
}




export default getGif


// http://api.giphy.com/v1/gifs/search?api_key=${minhaChave}&q=${oQueQueroBuscar}&limit=3`