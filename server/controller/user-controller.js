import User from "../models/user-schema.js";
export const userSignUp = async (req,res)=>{
    try{
        const user= req.body;
        const newUser = new User(user);
        const finduser= await User.findOne({username:newUser.username});
        if(finduser){
            console.log("user already exists")
            return res.status(401).json({message: " user already exists"});
        }
        await newUser.save();
        return res.status(201).json({message: user})
    }
    catch(e){
        console.log(e);
    }
}
export const userLogin = async(req,res)=>{
    try{
        const data = req.body;
        console.log(data);
        const findUser = await User.findOne({email: data.username, password: data.password});
        if(!findUser){
            return res.status(404).json({message: "user doesnt exist"});
        }
        return res.status(201).json(findUser);

    }
    catch(e){
        console.log(e);
    }
}
