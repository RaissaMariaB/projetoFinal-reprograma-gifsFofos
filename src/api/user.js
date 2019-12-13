import config from './config'


function getGif(nameGif){
    const url = `/search?api_key=Mo8nj8MHCKtEjwRMaaZw4h3AM6G6iy1E&q=cute_${nameGif}&limit=1`
    return config.get(url)
}

function  getGifRandom(){
    const url = '/random?api_key=Mo8nj8MHCKtEjwRMaaZw4h3AM6G6iy1E'
    return config.get(url)
}

 


export { getGif, getGifRandom }


// http://api.giphy.com/v1/gifs/search?api_key=${minhaChave}&q=${oQueQueroBuscar}&limit=3`
