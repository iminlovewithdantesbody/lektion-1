const form = document.querySelector(".input-form")
const submitBtn = document.querySelector(".button[type= 'submit']")

let inputname = form.elements.name.value
let inputmessage = form.elements.message.value
form.addEventListener("input", checkInputs)




const checkInputs = () => {
    const inputname = form.elements.name.value
    const inputmessage = form.elements.message.value
    

   if (!inputname  || !inputmessage) submitBtn.disabled = true 
   else submitBtn.disabled = false
}


form.addEventListener("submit", async (e) => { // e är förkortning för e
    e.preventDefault() // hindrar formuläret från att ladda om


    const name = form.elements.name.value // läser in det som skrivs i namn
    const message = form.elements.message.value

    

    if (!name  || !message) return alert("fyll i båda fälten!")




    })


