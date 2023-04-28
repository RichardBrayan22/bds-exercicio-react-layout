
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";

import { BrowserRouter, Switch, Route} from "react-router-dom";

const Routes = () => {

    return(
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/products">
                    <Catalog />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes