const userModel = require("../Models/userModel");

const createInventoryController = async(req,res)=>{

    try {
        const {email,inventoryType} =req.body
        const user =  await userModel.findOne({email})
        if (!user) {
            return res.status(404).send({
                message: "User not found",
                success: false,
            });
        }

        if (inventoryType === 'in' && user.role !== 'doner') {
            return res.status(403).send({
                message: "User is not a donor",
                success: false,
            });
        }

        if (inventoryType === 'out' && user.role !== 'hospital') {
            return res.status(403).send({
                message: "User is not a hospital",
                success: false,
            });
        }

        // Additional logic for handling inventory can be added here

        return res.status(200).send({
            message: "Inventory request processed successfully",
            success: true,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:"Error in Inventroty APi",
            success:false,
            error
        })
        
    }
 
}

module.exports = {createInventoryController};