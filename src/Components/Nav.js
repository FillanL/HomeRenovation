import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../CSS/nav.scss'

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <Link to="/">
                    <span id="logo"> Logo</span>
                    </Link>
                    <li>
                        <Link to="/aboutUs" >
                            COMPANY
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            PROJECTS
                        </Link>
                    </li>
                    {/* <li>
                        <Link>
                            CAREERS
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/articles">
                            HOW TO'S
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            CONTACT
                        </Link>
                    </li>
                </ul>
                
            </nav>
        )
    }
}

export default Nav
