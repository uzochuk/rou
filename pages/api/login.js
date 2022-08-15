import cookie from 'cookie'

// import db connection
import dbConnect from '../../utils/mongo'

// import user model
import User from '../../models/user.model'

 
export default async function handler  (req, res){
   
// call db function
await dbConnect()

    if (req.method === 'POST') {
     const {email, password} = req.body
     const queryCredentails =  await User.findOne({'email':email, 'password': password})
     

     if(queryCredentails){
        res.setHeader('Set-Cookie',
         cookie.serialize('token', '62cde0eed153fa9819825a69djkdkaka', {
            maxAge : 60 * 60,
            sameSite: 'strict',
            path:'/'
        }));
        res.status(200).json('successful');
     }else{
        res.status(400).json('wrong credentials')
     }
    }

    
}