import React, { Component } from 'react'
import '../CSS/blog.scss'

class Blog extends Component {
    render() {
        return (
            <div>
                <h2>Helpful tips and trick </h2>
            {/* <aside>

            </aside> */}
            <div id="grid-wrapper">
                {/* <div className="first"></div> */}
                {/* <div className="sml"></div> */}
                <div className="sml"></div>
                <div className="sml"></div>
                <div className="sml"></div>
                <div className="sml"></div>
                <div className="last"></div>
            </div>
            <div id="grid-wrapper2">
                <div className="sml"></div>
                <div className="sml"></div>
                <div className="sml"></div>
                <div className="first"></div>
                <div className="sml"></div>
                <div className="sml"></div>
                <div className="sml"></div>
                <div className="sml"></div>
            </div>
            </div>
        )
    }
}

export default Blog
