import TVShow from "../models/TVShow"

const imageNotFound= '/img/image_not_found.png'

const renderTVShowDetails= (show: TVShow, container: HTMLElement) => {
    const htmlContent= `
        <div id="show-container">
            <div id="image-container">
                <img src="${show.imageURL || imageNotFound}" alt="${show.name}">
            </div>

            <div id="detail-container">
                <p><span class= "detail-title">Titulo:</span> ${show.name}</p>
                <p><span class= "detail-title">Tipo:</span> ${show.type}</p>
                <p><span class= "detail-title">Canal:</span> ${show.channel}</p>
                <p><span class= "detail-title">Indioma:</span> ${show.language}</p>
                <p><span class= "detail-title">Genero:</span> ${show.genres.join(', ')}</p>
                <p><span class= "detail-title">Em Execucao:</span> ${show.isRunning ? 'Sim' : 'Nao'}</p>
                <p><span class= "detail-title">Data de Lancamento:</span> ${show.premieredDate ? show.premieredDate.toLocaleDateString() 
                    : 'Nao informado'}</p>
                <a id="backlink" href="javascript:history.back()">Voltar</a>
            </div>

        </div>
    `
    container.innerHTML = htmlContent
}

export default renderTVShowDetails