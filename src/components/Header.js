import React from "react";
import {NavLink} from "react-router-dom";

/*

 to = {"/"}
 http://localhost:3000/
 http://localhost:3000/recipe

 */
// render()
export default function Header() {
    // HTML 만 코딩함
    return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink className="navbar-brand" to={"/"}>SIST Recipe</NavLink>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><NavLink exact to={"/"}>레시피</NavLink></li>
                    <li><NavLink to={"/chef"}>쉐프</NavLink></li>
                    <li><NavLink to={"/news"}>레시피 뉴스</NavLink></li>
                    <li><NavLink to={"/find"}>레시피 검색</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

