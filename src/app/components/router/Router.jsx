import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact>
                        <h1>Route path / </h1>
                    </Route>
                    <Route path='/notes' exact>
                        <h1>Route path /notes</h1>
                    </Route>
                    <Route path='/notes/:id' exact>
                        <h1>Route path /notes/:id</h1>
                    </Route>
                    <Route path='/notes/edit/:id'>
                        <h1>Route path /notes/edit/:id</h1>
                    </Route>
                </Switch>
            </div>
        )
    }
}
export default Router