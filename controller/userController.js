import Users from '../models/users.js'

export const insertUser = async (user,res) =>{
    //wait to get the user information for mongodb
   const isUserExist = await Users.findOne({"user_id":user.user_id});

    if(isUserExist !== null){
         updateUSer(user,res);
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

const updateUSer = async (user,res) =>{
    const filter = {'user_id':user.user_id};      
    const options = {
        upset:true,
        new:true
    }
    await Users.findOneAndUpdate(
        filter,
        {auth_time:user.auth_time},
        options
    ).then((data)=>{
        res.status(200).json({status:200,message:"User is successfully  updated",data});
    }).catch((e)=>{
        res.status(400).json({status:400,message:e});
    })
 }

