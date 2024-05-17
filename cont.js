

const handleGetRequest = async(req, res)=>{
    let user = ""
    let phone = ""
    let email = ""
    let password = ""
    let serverError 


    if(!user){
        return res.status(401).json({message: "access denied"})
    }
    
    if(!phone){
        return res.status(401).json({message: "please add your phone number"})
    }
    if(!email){
        return res.status(401).json({message: "please add your email"})
    }
    
    if(!password){
        return res.status(401).json({message: "please add your password"})
    }
    
    
    }

    const handlePostRequest = async(req, res)=>{


    }

    const handlePatchRequest = async(req, res)=>{
        res.status(200).json({message: "Patch Request Successful"})


    }
        const handlePatchRequest = async(req, res)=>{
            res.status(200).json({message: "Patch Request Successful"})
    

    }

module.exports = {
    handleGetRequest,
    handlePostRequest,
    handlePatchRequest

}