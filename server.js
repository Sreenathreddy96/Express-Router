const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const app = express();
app.use(cors());

app.use("/",userRoute);



app.listen(8889,()=>{
    console.log("Listening to Port 8889");
});