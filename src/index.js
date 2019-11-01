import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Components/routing';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return(
        <Router>
            <div>
                <Routing/>
            </div>
        </Router>
    );
} 

ReactDOM.render(<App />, document.getElementById('root'));

