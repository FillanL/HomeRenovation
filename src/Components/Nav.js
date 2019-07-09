import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <span> Logo</span>
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
                        <Link to="contact">
                            CONTACT
                        </Link>
                    </li>
                </ul>
                
            </nav>
        )
    }
}

export default Nav
