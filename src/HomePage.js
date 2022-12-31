import React from 'react';
import './HomePage.css'

const Home = () => {


    return (
        <div>
            <div class="jumbotron m-3">
                    <h1 id="head-home">Welcome to Kyle's Workshop!</h1>
                    <h3 id="head-sub-home">A Portfolio App and so much more!</h3>
            </div>
            <h6 class="display 7" id="intro-home">
                                    Behind every great Web app is a great RESTful API with CRUD operations. This one is no exception of course.
                                    You are viewing a screen rendered by a React frontend I built that is consuming a 
                                    Django RESTful API backend with a PostgreSQL database that I lovingly designed and programmed as well. The static and media assets are served from a 
                                    Azure Blob Static Asset Storage Container that I created and configured. The backend and frontend are each hosted at 
                                    different domains, so I configured CORS to allow requests between them. Welcome to the world wide web of world wide
                                    web development! And welcome to the landing screen of my portfolio web app!
                                    <br></br><br></br>
                                    
                                    
            </h6>
        </div>
    )
    
}

export default Home;