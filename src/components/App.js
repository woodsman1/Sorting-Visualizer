import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sorting from './feature/Sorting';


const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Sorting />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
