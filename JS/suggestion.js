function enableTest(i){

    suggestForm.hidden = !suggestForm.hidden

    if (i === 1) {
      
        btnPincipal.innerHTML=""
        btnOn = document.createElement('button')
        btnOn.textContent = 'cliquer pour entrer une Suggestion'
        btnOn.classList = 'btnOn'
        
        btnPincipal.appendChild(btnOn)

        btnOn.addEventListener('click', (e)=>{
            mode++
            btnMode = mode%2
           enableTest(btnMode)
        
        })
       

    }
    if (i === 0) {
       
        btnPincipal.innerHTML=""
        btnOff = document.createElement('button')
        btnOff.textContent = 'cliquer pour Cacher le Formulaire'
        btnOff.classList = 'btnOff'
        btnPincipal.appendChild(btnOff)
        
        btnOff.addEventListener('click', (e)=>{
            mode++
            btnMode = mode%2
           enableTest(btnMode)
        
        })

    }

}

let suggestion = []
let btnFormSug = document.getElementById('btnFormSug')
let suggestForm = document.getElementById('suggestForm')
let btnPincipal = document.getElementById('btnPincipal')
let user = document.getElementById('user')
let userComment = document.getElementById('userComment')

let mode = 1
let btnMode

btnFormSug.addEventListener('click', (e)=>{
    mode++
    btnMode = mode%2
   enableTest(btnMode)

})


suggestForm.addEventListener('submit', (e)=>{
    e.preventDefault()
})







