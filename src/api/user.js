import config from './config'

function getGif(nameGif){
    const url = `/search?api_key=Mo8nj8MHCKtEjwRMaaZw4h3AM6G6iy1E&q=${nameGif}&limit=1`
    return config.get(url)
}




export { getGif}


// http://api.giphy.com/v1/gifs/search?api_key=${minhaChave}&q=${oQueQueroBuscar}&limit=3`
