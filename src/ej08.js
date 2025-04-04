import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/omdb-wrapper.js';

const main = async () => {
  const resultado1 = await OMDBSearchByPage("cars", 1);
  console.log("OMDBSearchByPage", resultado1);

  const resultado2 = await OMDBSearchComplete("cars");
  console.log("OMDBSearchComplete", resultado2);

  const resultado3 = await OMDBGetByImdbID("tt0317219");
  console.log("OMDBGetByImdbID", resultado3);
};

main();
