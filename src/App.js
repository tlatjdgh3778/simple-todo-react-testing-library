import "./App.css";
import React from "react";
import { Switch, Route } from "react-router";
import UserPage from "./pages/UserPage/UserPage";
import TodoPage from "./pages/TodoPage/TodoPage";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={TodoPage} />
                <Route path="/user" exact component={UserPage} />
            </Switch>
        </div>
    );
}

export default App;
