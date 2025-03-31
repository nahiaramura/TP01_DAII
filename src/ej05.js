let miUrl    = null;

let miObjeto = null;

miUrl    = new URL ('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo');

miObjeto = parsearUrl (miUrl);

console.log(miObjeto);


function parsearUrl(laURL) {
    let parametrosObj = {};
    laURL.searchParams.forEach((value, key) => {
        parametrosObj[key] = value;
    });

    return {
        host: laURL.origin,
        pathname: laURL.pathname,
        parametros: parametrosObj
    };

}