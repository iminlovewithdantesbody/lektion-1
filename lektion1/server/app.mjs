import express from "express"
import cors from "cors"// tillåter förförfrogningar från andra domäner till vår server(cross-orgin reshrsch file)
import fs from "fs"// node js filsyste-moudul för att läsa och skriva filler 
import { fileURLToPath, } from "url" // hjälper oss att få sökvägefn till den aktuela filen
import { dirname } from "path"// hjälper oss att få SÖKVÄGEN TILL den aktuela mapen

const __filename = fileURLToPath(import.meta.url)// hjälper oss att få den 
const __dirname = dirname(__filename)



const app = express()// skapar en express applikation

app.use(cors)
app.use(express.json())
app.use(express.urlencoded({ extended: false })) 

const saveMessage = (messageData) => {
 const filePath = `${__dirnamedirname}/messages.json`// skapa fullständig sökväg till jason-filen

 let messages = []
 if (fs.existsSync(filePath)) {// kollar om filen finns
    const data = fs.readFileSync(filePath, "utf-8")// läs fill som text 
    messages = JSON.parse(data)// konvertera json-fill till javaskript array

 }
 messages.push(messageData)// lägg till nya meddelande-objektet sist i arrayen 

 // spara tillbacka hela errayen till filen
 // jason.string() konverterar js till jason-text
 // null,2 gör jasonfilen lättläst med identiering 
 fs.writeFileSync(filePath, JSON.stringify(messages))
}



app.post("/messages", (req,res) => {
    const {name,message} = req.body  
    
    try {
        const newMessage = {
            name,
            message,
            timestamp: new Date().toISOString()
        }
    
        saveMessage(message)
        res.statusCode(201).json("saved successfully")
    } catch (error) {
        console.log(error)
        res.status(500).json("internal server error")
    }
    
    
})

export default app 