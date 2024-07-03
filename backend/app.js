const express = require('express');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;

app.get('/', (req,res)=>{
	res.send("meow meow");
})

app.listen(3000, ()=>{
	console.log(api);
	console.log('server is running at port: 3000');
})
