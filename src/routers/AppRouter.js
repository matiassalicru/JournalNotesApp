import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <AuthRouter/>
            </Router>
        </div>
    )
}
