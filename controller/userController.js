import Users from '../models/users.js'
export const insertUser = async (user,res) =>{
    //wait to get the user information for mongodb
   const isUserExist = await Users.findOne({"user_id":user.user_id});

    if(isUserExist !== null){
        res.status(400).json({status:400,message:"User is already exist update data"});
    }else{
         //inserting user information to mongodb
        const UserObj = new Users({
            user_id:user.user_id,
            name:user.name,
            email:user.email,
            imgUrl:user.picture,
            email_verified:user.email_verified, 
            role:"member",
            auth_time:user.auth_time
        });
        
        await UserObj.save().then(data=>{
            res.status(400).json({status:201,message:"User is created successfully",data:data});
        }).catch((error)=>{
            res.status(400).json({status:400,message:error,catch:true});
        });
    }

}