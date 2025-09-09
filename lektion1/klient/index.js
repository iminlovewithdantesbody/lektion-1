const form = document.querySelector(".input-form")
const submitBtn = document.querySelector(".button[type='submit']")

let inputname = form.elements.name.value
let inputmessage = form.elements.message.value





const checkInputs = () => {
     inputname = form.elements.name.value
     inputmessage = form.elements.message.value
    

   if (!inputname  || !inputmessage) submitBtn.disabled = true 
   else submitBtn.disabled = false
}

form.addEventListener("input", checkInputs)

form.addEventListener("submit", async (e) => { // e är förkortning för e
    e.preventDefault() // hindrar formuläret från att ladda om


    const name = form.elements.name.value // läser in det som skrivs i namn
    const message = form.elements.message.value

    

    if (!name  || !message) return alert("fyll i båda fälten!")

        try {
            const response = await fetch("http//localhost:3000/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name:inputname,
                    message:inputmessage
    
                })
            
               
            }) 

            if (response.ok) {
                alert("meddelandet sparades!")
                form.reset()
            
                
            }   else {
                alert("fel uppstod!")
                 
            }
        } catch (error) {
            console(error)
            console.error("fel:",error)
            alert("kunde inte skika meddelandet")
        }
    
   

        

        
    

})
