import userModel from "../models/userModel.js";

export const userSignUp = async (req,res) => {
    try {
        
        const {name , email , password} = req.body

        const userDetails = await userModel.create(req.body)

        return res.send(userDetails)


    } catch (err) {
        res.status(500).send({
            message: err.message,
          });
    }
};


export const userLogin = async (req,res) => {
    try {

        const { email, password } = req.body;

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        return res.status(400).send("Invalid email id.");
        
        const findUser = await userModel.findOne({email})

        if (!findUser) {
            return res.status(400).send("user not found");
          }

          if (findUser.password != password) {
            return res.status(400).send("wrong password");
          }
        
          return res.status(200).send('Login successfull.')
    } catch (err) {
        res.status(500).send({
            message: err.message,
          });
    }
}