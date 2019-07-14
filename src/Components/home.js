import React, { Component } from 'react'
import '../CSS/home.scss'

class home extends Component {
    render() {
        return (
            <div>
                <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                width="100%"
                height="400px" 
                alt="hed"
                />
                
                <div className="company-features">
                    <div className="features-card">
                        <h2>
                            Affordable Prices
                        </h2>  
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                        </p>
                    </div>
                    <div className="features-card">
                        <h2>
                            Flexible Hours
                        </h2>  
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                        </p>
                    </div>
                    <div className="features-card">
                        <h2>
                            Professional Finishes
                        </h2>  
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                        </p>
                    </div>
                </div>



                <div className="info-desc">
                    {/* <div className="blur"> */}
                    <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="stuf"/>
                    {/* </div> */}

                    <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fuga laborum. Tempore vero maxime recusandae ullam, illum cupiditate illo, quo necessitatibus ipsa fuga cum. Nostrum officiis reiciendis nemo dolor id! Tempore vero maxime recusandae ullam, illum cupiditate illo, quo necessitatibus ipsa fuga cum. Nostrum officiis reiciendis nemo dolor id!
                    </article>
                </div>
                <div className="info-desc">
                    <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fuga laborum. Tempore vero maxime recusandae ullam, illum cupiditate illo, quo necessitatibus ipsa fuga cum. Nostrum officiis reiciendis nemo dolor id! Tempore vero maxime recusandae ullam, illum cupiditate illo, quo necessitatibus ipsa fuga cum. Nostrum officiis reiciendis nemo dolor id!
                    </article>
                    <img 
                        src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                        alt="stuf"
                    />
                </div>
            </div>
        )
    }
}

export default home
