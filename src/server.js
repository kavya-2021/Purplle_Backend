const app = require('./index');


const connect = require('./configs/db')

app.listen("4905",async()=>{
    await connect();
    console.log("Listening to port 4905");
})