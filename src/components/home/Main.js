import React from 'react'
import {Switch, Route, useRouteMatch} from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Notice from '../notice/Notice'
import Section from '../section/SectionList'
import NoticeInfo from "../notice/NoticeInfo"

function Main() {
    const {url, path} = useRouteMatch()
    const id=123123
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/home" >
                    <Home />
                </Route>
                <Route exact path="/home/notice">
                    <Notice />
                </Route>
                <Route exact path={`/home/notice/${id}`}>
                    <NoticeInfo />
                </Route>
                <Route exact path="/home/section" >
                    <Section />
                </Route>
            </Switch>
        </div>
    )
}

export default Main
