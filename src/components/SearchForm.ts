import axios from "axios"
import { API_url } from "../config"
import { getTVShow } from "../models/TVShow"
import renderTVShowCard from "./TVShowCard"

const $= document.querySelector.bind(document)

const http = axios.create({
    baseURL: API_url,
})
const renderSearchForm = (container: HTMLElement) => {
    const htmlContent= `
    <form id="search-form">
     <input 
     type="text" 
     name="filter"
     id="filter" 
     placeholder="Digite o titulo da serie">
     <button>Pesquisar</button>
    </form>`
    container.innerHTML= htmlContent
    //const searchForm= <HTMLFormElement>$('#search-form')
    //searchForm.onsubmit= filter
}

const searchTVShows= async () => {
    //event.preventDefault()

   //const filter= <HTMLInputElement>$('#filter')
    //const queryText = filter.value
    const params = new URLSearchParams(document.location.search) 
    const filter = params.get('filter')
    if(filter) {
        const response = await http.get('/search/shows', {params:
            {q: filter,},})
        
        if(response.status == 200) {
        const {data} = response
        const resultArea = <HTMLDivElement>$('#result-area')
        resultArea.innerHTML= ''
        data.forEach((jsonObj: any) =>{
            const{show} = jsonObj
            const TVShow = getTVShow(show)
            renderTVShowCard(TVShow, resultArea)
        }) 
    }
    
    }

    
}


searchTVShows()

export default renderSearchForm