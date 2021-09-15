import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sorting from './feature/Sorting';


const App = () => {
    return (
        <Router>
            <div>
                {/* <h1>My React App</h1> */}

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
