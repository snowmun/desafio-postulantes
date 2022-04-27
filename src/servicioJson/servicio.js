const cheerio = require('cheerio');
const res = require('express/lib/response');
const rs = require('request-promise')


const init = async ()=>{
    let objeto= [],
    separadorPuntoComa= [];
    let resFicha = await rs('https://www.sii.cl/servicios_online/1047-nomina_inst_financieras-1714.csv', (error, res, body) =>{
        if (!error && res.statusCode == 200) {
          let $ = cheerio.load(body)
        } 
    })   
    const separacionArr = resFicha.split('\r\n');
    separacionArr.shift();
    separacionArr.pop();
    separacionArr.forEach(e => {
        separadorPuntoComa.push( e.split(";"))
    });
    separadorPuntoComa.forEach(a => {
        objeto.push({id:a[0],razonSocial:a[1],pais:a[2],
                    DatosInscripion:{DR:a[3],ResNo:a[4],Fecha:a[5]},
                    vigenciaHasta:a[6],datosUltimaActualizacion:{DR:a[7],ResNo:a[8],Fecha:a[9]},
                    Estado:a[10]
        });
    });
    const  transformacionJson = JSON.stringify(objeto);
    return objeto

}

module.exports = init