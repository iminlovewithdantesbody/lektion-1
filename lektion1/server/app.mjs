import express from "express"
import cors from "cors"

const app = express()


app.use(cors)
app.use(express.json())
app.use(express.urlencoded({ extended: false })) 

const saveMessage = () => {
     fs.writeFilesync(fileUrlToPatth), JSON.stringify(messages)
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