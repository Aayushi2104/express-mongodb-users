const userModel = require("../models/user");

const getAllUsers = async (req, res) => {
    const allusers = await userModel.find({})

    res.status(200).json({
        message: "all users fetched",
        allusers
    })
}
const getUserById = async (req, res) => {
    const user = await userModel.findById(req.params.id)

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    res.status(200).json({
        message: "User fetched successfully",
        user
    })
}
const createUser = async (req, res) => {
    const newUser = new userModel(req.body);


    await newUser.save();

    res.status(201).json({
        message: "User created successfully",
        user: newUser
    });
}
const updateUser = async (req, res) => {
    const { first_name, last_name, email, age } = req.body;

    const user = await userModel.findByIdAndUpdate(
        req.params.id,
        { $set: { first_name,last_name, email, age } },
        { new: true, runValidators: true }
    );

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }
    res.status(200).json({
        message: "User updated successfully",
        user
    });
}
const deleteUser = async (req, res) => {
    const user = await userModel.findByIdAndDelete(req.params.id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.status(200).json({
        message: "User deleted successfully"
    });
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}