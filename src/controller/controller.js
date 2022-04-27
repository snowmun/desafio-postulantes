const init = require('../servicioJson/servicio')

const info = async( req,res) => {
    try{
        const id =req.params.id
        const registros =  await init()
        const resId = registros.filter(e=> e.id === id)
        if(resId){
            res.status(200).json({  
                "status":true,
                "message":"Registros encontrados con exito",
                "Data": resId});
        }else{
            res.status(409).json({  
                "status":true,
                "message":"El registro buscado no existe",
                "Data": resId});
        }
    }catch(error){
        res.json({message:error.message})
    }
};

const infoAll = async (req,res) => {
    try{
        const registros =  await init()
        res.status(200).json({  
            "status":true,
            "message":"Registros encontrados con exito",
            "Data": registros});
    }catch(error){
        res.json({message:error.message})
    }
};


module.exports = {
    info,infoAll
}