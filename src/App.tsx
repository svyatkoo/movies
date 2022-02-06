import React from 'react';
import {Route, Routes} from "react-router-dom"
import {HomePage, MoviesListPage} from "./Pages";

const App = () => {
  return (
      <div>
        App
          <Routes>
              <Route path={"/"} element={<HomePage/>}>
                  <Route path={"movies"} element={<MoviesListPage/>}/>
              </Route>

              {/*<Route path={"users"} element={<UsersPage/>}>*/}
              {/*    <Route path={":id"} element={<UsersDetailsPage/>}/>*/}
              {/*</Route>*/}
              {/*<Route path={"posts"} element={<PostsPage/>}/>*/}
              {/*<Route path={"comments"} element={<CommentsPage/>}/>*/}
              {/*<Route path={"*"} element={<NotFoundPage/>}/>*/}
          </Routes>
      </div>
  );
};

export default App;
