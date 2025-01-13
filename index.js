const express = require('express')
const app = express()
const array ={name:"amzal",
prenom:"said",
occupation:"freelancer"
};
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Server ready'))
{/*send response to the client with json response*/}
app.get('/api',(req,res)=> res.json(array))
