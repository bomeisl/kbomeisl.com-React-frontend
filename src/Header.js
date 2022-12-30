import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>
        <h1 class='ui header'>
            <h1 class="display 2 ">Kyle Bomeisl</h1>
            <h2 class="display 4 text-muted">Software Engineer</h2>
        </h1>

        <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">Portfolio</a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">About Me<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Skill Set</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">My Musings (blog)</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    )
}

export default Header;