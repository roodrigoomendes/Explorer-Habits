const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)


function add(){


    const today = new Date()
    .toLocaleDateString('pt-br')
    .slice(0,-5)

    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
        alert(' ❌ O dia ja existe ')
        return
    } 
    
    nlwSetup.addDay(today)
    alert('✅ Adicionado com sucesso ')

}

function save(){
    localStorage.setItem('DATAhabits', 
    JSON.stringify(nlwSetup.data)) 
}

    
const data = JSON.parse(localStorage.getItem('DATAhabits')) || {}


nlwSetup.setData(data)
nlwSetup.load()
