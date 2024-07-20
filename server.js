const express = require("express");
const app = express();
const dotenv =  require("dotenv")
const PORT =  process.env.PORT || 5000;
const morgan =  require("morgan")
const cors= require("cors");
const connectDB = require("./Config/db");

//dot env config
dotenv.config();
//db connection

connectDB();

//middlewear
app.use(express.json())
app.use(cors());
app.use(morgan('dev'))

//Router Details
app.use('/api/v1/test',require("./Routes/textRoutes"));
app.use('/api/v1/auth',require("./Routes/authRoutes"));
app.use('/api/v1/inventory',require("./Routes/inventoryRoutes"))


app.listen(PORT,()=>{
    console.log(`server is running ${process.env.PORT} and ${process.env.DEV_MODE}`)
 
})