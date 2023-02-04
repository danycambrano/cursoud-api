const mongoose = require("mongoose");

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  IP_SERVER,
  API_VERSION,
  DB_PORT,
} = require("./constans");
const app=require("./app");

const port=process.env.PORT || 4000;

mongoose.set("strictQuery", false);
mongoose.connect(`mongodb://${IP_SERVER}:${DB_PORT}/${DB_NAME}`, (error) => {
  if (error) throw error;
app.listen(port,()=>{
    console.log("###################");
    console.log("#### API REST #####");
    console.log("###################");
    console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}`)
})
});
