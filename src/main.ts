import renderSearchForm from './components/SearchForm'
import './style.css'

const $ = document.querySelector.bind(document)

const app= <HTMLDivElement>$('#app')
renderSearchForm(app)
const resultArea = document.createElement('div')
resultArea.id= 'result-area'
app.insertAdjacentElement('beforeend', resultArea)
