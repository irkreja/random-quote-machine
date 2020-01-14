import { FETCH_QUOTES, NEW_QUOTE } from '../constants';

export const fetchQuotes = () => dispatch => {
  fetch(
    'https://gist.githubusercontent.com/irkreja/5f35dc197c6be4ddc32a45acdd23fcd7/raw/0d9b85d4a9d9da9dc67fa0257df66ed80702ff3a/quotes.json'
  )
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      console.log('ok');
      return response.json();
    })
    .then(data => {
      //   this.setState({ loading: false, error: false, posts: data });
      dispatch({ type: FETCH_QUOTES, payload: data.quotes });
    })
    .catch(error => {
      console.log(error);
      //   this.setState({ loading: false, error: true });
    });
};

export const newQuote = randomNo => ({
  type: NEW_QUOTE,
  payload: randomNo,
});
