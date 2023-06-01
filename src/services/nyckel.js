import axios from "axios";

const identificarPraga = async (imagem, token) => {
  const form = new FormData();
  form.append("data", imagem);

  const { data } = await axios.post(
    "https://www.nyckel.com/v1/functions/j4rq6vb5veq00lq6/invoke",
    form,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  return data;
};

const getToken = () => {
  return axios.post(
    "https://www.nyckel.com/connect/token",
    {
      client_id: "a7jbecjr9hpfui0yui1wijijtfv42y1v",
      client_secret:
        "lgfjb05ju7yvmbtvcxc67alqo0hzheoaftte2gntch2blmxhlzs5mvoauovbj62f",
      grant_type: "client_credentials",
    },
    {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    }
  );
};

export { identificarPraga, getToken };
