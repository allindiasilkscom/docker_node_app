const express =  require("express");
const authMiddlewear = require("../MiddleWears/authMiddlewear");
const { createInventoryController } = require("../Controller/inventoryController");
const router =  express.Router();


router.post("/creat-inventory",authMiddlewear,createInventoryController)


module.exports =  router