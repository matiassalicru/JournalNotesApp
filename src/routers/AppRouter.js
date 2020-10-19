import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {BrowserRouter as Router, Redirect, Switch} from 'react-router-dom'


import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../actions/auth'
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {

        firebase.auth().onAuthStateChanged( (user) => {

            if (user?.uid) {
                dispatch( login(user.uid , user.displayName) );
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false)
            }

            setChecking(false)

        } );
        
    }, [dispatch, setChecking, setIsLoggedIn])

    if(checking){
        return (
            <h1> Espere... </h1>
        )
    }

    return (
      <Router>
        <div>
          <Switch>
            <PublicRoutes
              path="/auth"
              component={AuthRouter}
              isLoggedIn={isLoggedIn}
            />

            <PrivateRoutes
              exact
              path="/"
              component={JournalScreen}
              isLoggedIn={isLoggedIn}
            />

            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    );
}
