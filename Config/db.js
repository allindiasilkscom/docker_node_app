const mongoose =  require("mongoose")

const connectDB =  async()=>{

    try {
       await mongoose.connect(process.env.DB_URL)
       console.log(`Connect to DB ${mongoose.connection.host}`)
        
    } catch (error) {

        console.log(`Mongoo DB ${error}`)        
    }

}

module.exports =  connectDB