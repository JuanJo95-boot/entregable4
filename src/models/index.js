const Favorite = require("./Favorite");
const Post = require("./Post");
const User = require("./User");

//Post -> userId
Post.belongsTo(User)
User.hasMany(Post)

Favorite.belongsTo(User)
User.hasMany(Favorite)

Favorite.belongsTo(Post)
Post.hasMany(Favorite)

//User.belongsToMany(Post, {through: 'favorites'})
//Post.belongsToMany(User, {through: 'favorites'})
