// import db connection
import dbConnect from '../../utils/mongo'

// import user model
import User from '../../models/user.model'

 
const handler = async (req, res) =>{
    const {method} = req

    await dbConnect()

    //GET ALL USERS
    if(method === 'GET'){
        try {
            const users = await User.find()
            res.status(201).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    if(method === 'POST'){
        try {
            const user = await User.create(req.body)
            res.status(201).json(order)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default handler