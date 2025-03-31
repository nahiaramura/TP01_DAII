function parsearUrl(laURL) {
    try {
        let urlObj = new URL(laURL); 

        let parametrosObj = {};
        urlObj.searchParams.forEach((value, key) => {
            parametrosObj[key] = value;
        });

        return {
            host: urlObj.origin,
            pathname: urlObj.pathname,
            parametros: parametrosObj
        };
    } catch (error) {
        console.error("Error al parsear la URL:", error.message);
        return { host: null, pathname: null, parametros: {} }; 
    }
}

let miUrlValida = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
let miUrlInvalida = 'ht!tp://url_invalida'; 

console.log(parsearUrl(miUrlValida));  
console.log(parsearUrl(miUrlInvalida));  
