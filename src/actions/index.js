import axios from "axios";

export const FETCH_JOKE_LOADING = "FETCH_JOKE_LOADING";
export const FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS";
export const FETCH_JOKE_FAIL = "FETCH_JOKE_FAIL";

export const getJoke = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_JOKE_LOADING });

    axios
      .get("http://api.icndb.com/jokes/random")
      .then((res) => {
        console.log(res.data.value);

        dispatch({ type: FETCH_JOKE_SUCCESS, payload: res.data.value.joke });
      })

      .catch((err) => {
        dispatch({ type: FETCH_JOKE_FAIL, payload: err.response });
      });
  };
};
export const fetchJokeLoading = () => {
  return { type: FETCH_JOKE_LOADING };
};

export const fetchJokeSuccess = () => {
  return { type: FETCH_JOKE_LOADING };
};

export const fetchJokeFail = () => {
  return { type: FETCH_JOKE_FAIL };
};
