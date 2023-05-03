const express =require('express');
const app =express();
const cors = require('cors')
const port =process.env.PORT || 5000;

const chef =require('./data/chefs.json');
app.use(cors())
app.get('/',(req,res)=>{
  res.send('FoodHub is comming soon')  
})

app.get('/chef',(req,res)=>{
  res.send(chef)
})
app.listen(port , ()=>{
    console.log(`FoodHub API is running on port : ${port}`)
})