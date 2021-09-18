import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sorting from './feature/Sorting';

// removed this due error during deploying
// error is due to "BrowserRouter"  solution :- https://stackoverflow.com/questions/55568697/blank-page-after-running-build-on-create-react-app
// const App = () => {               
//     return (
//         <Router>
//             <div>
//                 <Switch>
//                     <Route exact path="/">
//                         <Sorting />
//                     </Route>
//                 </Switch>
//             </div>
//         </Router>
//     )
// }

// export default App


const App = () => {
    return (
        <>
            <Sorting />
        </>
    )
}

export default App