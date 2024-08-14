const catchError = require('../utils/catchError');
const Favorite = require('../models/Favorite');



const favorite = catchError(async(req, res) => {
    //user:id/post
    //const userId = req.params.userId
    //const {id} = req.userId

    const userId = req.user.id
    const { id } = req.params
//validacion
    if(parseInt(userId)!== parseInt(id)) return res.status
(404).json('User not found');

    
    

    const body ={userId: parseInt(userId),postId:parseInt(req.body.postId)}
    const result = await Favorite.create(body);
    return res.status(201).json(result);
});



module.exports = {
  
    favorite
 

}