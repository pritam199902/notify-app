import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Home from './AdminHome'
import Navbar from "../home/Navbar";
// import Login from './AdminLogin'
// import Register from './AdminRegister'
import Addnotice from './Addnotice'


function AdminMain() {
    const { url, path } = useRouteMatch()

    return (
        <div>
            {/* {console.log(url)} */}
            <Navbar />

            <Switch>
                <Route path="/admin" >
                    <Home />
                </Route>
                <Route exact path="/admin/Addnotice">
                    <Addnotice />
                </Route>
                {/* <Route exact path="/admin/login" >
                    <Login />
                </Route>
                <Route exact path="/admin/register" >
                    <Register />
                </Route> */}

            </Switch>
        </div>
    )
}

export default AdminMain
