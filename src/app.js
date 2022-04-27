const express = require ('express');
const cors = require('cors');
const router = require ('./route/routes.js');

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/',router)

app.listen(PORT,()=>{
    console.log(`backend montado con exito en el puerto ${PORT}`)
})
