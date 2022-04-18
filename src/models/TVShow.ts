type TVShow = {
    id: number
    name: string
    type: string
    language: string
    genres: string []
    isRunning: boolean
    premieredDate?: Date
    channel: string
    imageURL?: string
}


export const getTVShow = (objJson : any): TVShow => {
    const{id, name, type, language, genres, status, premiered, webChannel, network,image } = objJson

    const slicedData =premiered.split('-')
    const year = parseInt(slicedData[0])
    const month = parseInt(slicedData[1])-1
    const day= parseInt(slicedData[2])
    
    

    const TVShow: TVShow ={
      id, name, type, language, genres, 
      isRunning: status == 'Running'? true : false, 
      channel: network ? network.name : webChannel.name
    }

    if(premiered) {
        TVShow.premieredDate = new Date(year,month,day)
    }

    if(image) {
        TVShow.imageURL = image.medium
    }

    return TVShow
}

export default TVShow