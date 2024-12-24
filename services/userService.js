const User = require('../models/userModel');

const getAllUsers = async()=>{
    return await User.find();
}
const getUserById = async()=>{
    return User.findById(id);
}
const createUser = async(data)=>{
    const user = newUser(data);
    return user.save(data);
}
const updateUser = async (id,data) => {
    return await User.findByIdAndUpdate(id, date, {new: true});
}
const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
}
module.exports = {getAllUsers,getUserById,createUser,updateUser,deleteUser}