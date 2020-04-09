import axios from 'axios';

export function getProductInfo(asin, callback) {
  const url = 'https://api.rainforestapi.com/request';

  const params = {
    api_key: "02620E4978B54FC09D07BBACD878342E",
    type: "product",
    amazon_domain: "amazon.com",
    asin
  };

  axios.get(url, { params })
    .then(response => callback(response.data))
    .catch(error => {
      // catch and print the error
      console.log(error);
    });
}
