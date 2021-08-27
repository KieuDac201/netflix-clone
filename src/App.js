import React, { useReducer } from "react";
import "./App.css";
import Banner from "./component/Banner";
import Nav from "./component/Nav";
import Row from "./component/Row";
import requests from "./requests";

export const AppContext = React.createContext();
const initialState = {
  dataSearch: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_DATA_SEARCH":
      return {
        dataSearch: action.data,
      };
    default:
      return initialState;
  }
}

function App() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <Nav />
        <Banner />
      </AppContext.Provider>
      <Row title="Search result" fetchUrl={requests.fetchTrending} />
      <Row title="Top trending" fetchUrl={requests.fetchTrending} large />
      <Row title="Netflix original" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRate} />
      <Row title="Action movie" fetchUrl={requests.fetchActionMovie} />
      <Row title="Comedy movie" fetchUrl={requests.fetchComedyMovie} />
      <Row title="Romance movie" fetchUrl={requests.fetchRomanceMovie} />
      <Row title="Document movie" fetchUrl={requests.fetchDocumentaries} />
      <div className="slider-1"></div>
    </>
  );
}

export default App;
