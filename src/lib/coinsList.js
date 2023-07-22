const dataFetch = () => {

  // const data = await fetch('https://api.coingecko.com/api/v3/coins/list', {
  //   method: "GET",
  //   headers: {
  //     "accept": "application/json"
  //   }
  // });
  //console.log(data);

  const output = {};

  for (let i = 0; i < data.length; i++) {
    if (data[i].platforms.ethereum) output[data[i].symbol] = true;
  }

  return output;
}

const coinsList = dataFetch();

export default coinsList;