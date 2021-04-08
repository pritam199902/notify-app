import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Notice from '../notice/Notice'
import Section from '../section/SectionList'
import NoticeInfo from "../notice/NoticeInfo"
import Dept from "../dpt/Dept"
import NewSection from "../section/NewSection"
import NoticeType from "../notice/NoticeType"
import NoticeView from "../notice/Noticeview"

function Main() {
    const { url, path } = useRouteMatch()
    const id = 123123
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/home" >
                    <Home />
                </Route>
                <Route path="/home/dpt/Dept">
                    <Dept />
                </Route>
                <Route path="/home/section/NewSection">
                    <NewSection />
                </Route>
                <Route path="/home/notice/NoticeType">
                    <NoticeType />
                </Route>
                <Route path="/home/notice/Noticeview">
                    <NoticeView />
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
