import React from "react";
import Profile from "./Profile";
import { NavLink, Route } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";
import RouterHookSample from "./RouterHookSample";

function Profiles() {
    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink
                        to="/profiles/godsu"
                        activeStyle={{ background: "black", color: "white" }}
                    >
                        godsu
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profiles/jangchanhee"
                        activeStyle={{ background: "black", color: "white" }}
                    >
                        jangchanhee
                    </NavLink>
                </li>
            </ul>
            <Route
                path="/profiles"
                exact
                render={() => <div>사용자를 선택하랑께~~</div>}
            />
            <Route path="/profiles/:username" exact component={Profile} />
            <RouterHookSample />
        </div>
    );
}

export default Profiles;
