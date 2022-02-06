import React from 'react';
import {Route, Routes} from "react-router-dom"
import {HomePage, MovieDetailsPage, MoviePage, MoviesListPage} from "./Pages";

const App = () => {
  return (
      <div>
        App
          <Routes>
              <Route path={"/"} element={<HomePage/>}>
                  <Route path={"movies"} element={<MoviePage/>}>
                      <Route index element={<MoviesListPage/>}/>
                      <Route path={":id"} element={<MovieDetailsPage/>}/>
                  </Route>
              </Route>
          </Routes>
      </div>
  );
};

export default App;
