import { Route, Switch } from "react-router-dom";

import Info from './info'
import Address from './Address'
import Desc from './Desc'
import Dpt from './Dpt'
import Sec from './Sec'
// import Welcome from './components/home/Welcome'
// import Login from './components/admin/AdminLogin'
// import Register from './components/admin/AdminRegister'

function InsReg() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/insreg" >
                    <Info />
                </Route>
                <Route exact path="/insreg/address" >
                    <Address />
                </Route>
                <Route exact path="/insreg/desc" >
                    <Desc />
                </Route>
                <Route exact path="/insreg/dpt" >
                    <Dpt />
                </Route>
                <Route exact path="/insreg/sec" >
                    <Sec />
                </Route>



            </Switch>
        </div>
    );
}

export default InsReg;
