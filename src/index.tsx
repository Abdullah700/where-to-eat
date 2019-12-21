import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import 'i18nextM'
import Loading from "components/Loading/Loading";
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes as RouterOutlet} from 'router/routes';

ReactDOM.render(
    <Suspense fallback={(
        <Loading fill={'white'}/>)
    }>
        <Router>
            <RouterOutlet/>
        </Router>
    </Suspense>
    , document.getElementById('root'));





