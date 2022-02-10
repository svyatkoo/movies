import {Route, Routes} from "react-router-dom"

import {HomePage, MovieDetailsPage, MoviePage, MoviesGenreListPage, MoviesListPage, UserPage} from "./Pages";

const App = () => {
    return (
        <div >
            <Routes>
                <Route path={"/"} element={<HomePage/>}>
                    <Route path={"movies"} element={<MoviePage/>}>
                        <Route index element={<MoviesListPage/>}/>
                        <Route path={":id"} element={<MovieDetailsPage/>}/>
                        <Route path={"genre/:genreId"} element={<MoviesGenreListPage/>}>
                            <Route path={"genre/:genreId/:id"} element={<MovieDetailsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={"user"} element={<UserPage/>}/>
                    <Route path={"tv"} element={<MoviePage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
