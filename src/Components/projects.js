import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../CSS/projects.scss'

class projects extends Component {
    render() {
        return (
            <div className="hello">
                <h2>Completed projects</h2>

                <div className="projects-grid">
                    <Link to="/">
                        <div className="project-card">
{/* dsldjdsld */}
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="project-card">

                        </div>
                    </Link>
                    <Link to="/">
                        <div className="project-card">

                        </div>
                    </Link>
                    <Link to="/">
                        <div className="project-card">

                        </div>
                    </Link>
                    <Link to="/">
                        <div className="project-card">

                        </div>
                    </Link>
                    <Link to="/">
                        <div className="project-card">
                            
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default projects
