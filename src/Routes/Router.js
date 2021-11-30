import { Header } from '../Components/Header/Header';
import Home from '../Pages/Home/Home'
import Pilots from '../Pages/Pilots/Pilots'
import Starships from '../Pages/Starships/Starships'



import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
    return (

        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path={"/"}>
                    <Home />
                </Route>

                <Route exact path={"/pilots"}>
                    <Pilots />
                </Route>

                <Route exact path={"/starships"}>
                    <Starships />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};