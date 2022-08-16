import cookie from 'cookie'

// import db connection
import dbConnect from '../../utils/mongo'

// import user model
import User from '../../models/user.model'

 
export default async function handler  (req, res) {
// call db function
   await dbConnect()


// create new user
    if (req.method === 'POST') {
        const queryCredentails =  await User.findOne({'email':req.body.email})
     
        if(queryCredentails){
            res.status(501).json('email already exists')
        }else{
            const dataBody = req.body
            try {
                const user = await User.create(req.body)
                res.setHeader('Set-Cookie',
                cookie.serialize('token', '62cde0eed153fa9819825a69djkdkaka', {
                maxAge : 60 * 60,
                sameSite: 'strict',
                path:'/'
                }));
                res.status(201).json(user)
                
            }catch (error) {
                res.status(400).json(error)
            }

            
        }
    }


}
  