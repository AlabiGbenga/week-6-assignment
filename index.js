

const express = require('express')
const dotenv = require('dotenv')
// const fnt = require('./cont')

dotenv.config()
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 8000


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})

const handleGetRequest = async(req, res)=>{
    return res.status(200).json({message: "successful" })
}
const handleUserRequest = async(req, res)=>{
    return res.status(200).json({message: "List of User......." })
}
const handlePostRequest = async(req, res)=>{
    const {email, password} = req.body

        if(!email){
            return res.status(400).json({
                message: "Please add your email"
            })
        }
        return res.status(200).json({
            message: "successful",
            email
        }

        
        )
    //         if(!password){
    //             return res.status(400).json({
    //                 message: "Please add your phone number"
    //     })
    // }
   
   
   
//         return res.status(200).json({message: "Please add the following details: name, phone number, email, password", 
//         name
//    })
}


app.get("/", handleGetRequest)

app.get("/user", handleUserRequest)

app.get("/user", handleUserRequest)

app.post("/add-user", handlePostRequest)


// app.get("/post", async (req, res)=>{

//     if(!user){
//     return res.status(401).json({message: "access denied"})
// }

// if(!phone){
//     return res.status(401).json({message: "please add your phone number"})
// }
// if(!email){
//     return res.status(401).json({message: "please add your email"})
// }

// if(!password){
//     return res.status(401).json({message: "please add your password"})
// }


// })
// app.get("/post", fnt.handleGetRequest)

// app.post("/test", fnt.handlePostRequest)

// app.patch("/test", fnt.handlePatchRequest)

// app.put("/test", fnt.handleGetRequest)

// app.put("/class", (req, res)=>{
//     res.status(200).json({message: "Put Request Successful"})

//     app.delete("/employee", (req, res)=>{
//         res.status(200).json({message: "Delete Request Successful"})
//     }

