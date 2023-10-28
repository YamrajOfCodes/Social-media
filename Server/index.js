const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
const Authrouter=require('./Router/Authrouter');
const dbconnect=require('./dbconnect');
const morgan=require('morgan');
const Postrouter=require("./Router/Postrouter");
const cookieparser=require('cookie-parser');
const cors=require("cors")



app.use(cookieparser());
app.use(express.json());
app.use('/post',Postrouter);
app.use('/Auth',Authrouter);
app.use(morgan('common'));
app.use(cors({
           credentials:true,
    origin:'http://localhost:3000'
}))


dbconnect();

const Port=process.env.PORT || 5000;

app.listen(Port,()=>{
    console.log('Listening at ',Port);
})


