import axios from "axios";
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;


const APIKEY = "aa5b8544"; 
const BASE_URL = `https://www.omdbapi.com/`;


const OMDBSearchByPage = async (searchText, page = 1) => {
  const returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
  };

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: APIKEY,
        s: searchText,
        page
      }
    });

    if (response.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = parseInt(response.data.totalResults);
      returnObject.datos = response.data.Search;
    }
  } catch (error) {
    console.error("Error en OMDBSearchByPage:", error.message);
  }

  return returnObject;
};


const OMDBSearchComplete = async (searchText) => {
  const returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
  };

  try {
    const primeraPagina = await OMDBSearchByPage(searchText, 1);
    if (!primeraPagina.respuesta) return returnObject;

    returnObject.respuesta = true;
    returnObject.cantidadTotal = primeraPagina.cantidadTotal;
    returnObject.datos.push(...primeraPagina.datos);

    const totalPages = Math.ceil(primeraPagina.cantidadTotal / 10);
    for (let i = 2; i <= totalPages; i++) {
      const pagina = await OMDBSearchByPage(searchText, i);
      if (pagina.respuesta) {
        returnObject.datos.push(...pagina.datos);
      }
    }

  } catch (error) {
    console.error("Error en OMDBSearchComplete:", error.message);
  }

  return returnObject;
};


const OMDBGetByImdbID = async (imdbID) => {
  const returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: {}
  };

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: APIKEY,
        i: imdbID
      }
    });

    if (response.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.datos = response.data;
    }
  } catch (error) {
    console.error("Error en OMDBGetByImdbID:", error.message);
  }

  return returnObject;
};

export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };
