const mongoose=require('mongoose');

module.exports=async()=>{

const mongoUrl='mongodb+srv://kundan:Yamrajempire1777@cluster0.k4tndq4.mongodb.net/?retryWrites=true&w=majority'

try {
    
 const connect=await mongoose.connect(mongoUrl);
console.log('database connect');

} catch (error) {
    console.log('database is not connected',error);
    process.exit(1);
}


}