import { useEffect } from "react";
import $ from 'jquery';


const AppBar = () => {
  useEffect(() => {
    var scroll_start = 0;
    var startchange = $('#myhome');
    var offset = startchange.offset();
     if (startchange.length){
    $(document).scroll(function() {
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
         $(".navbar").css('box-shadow', '1px 1px 15px #888888');
        } else {
         $(".navbar").css('box-shadow', '0px 0px 0px #888888');
        }
    });
     }
})

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">JU</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#my-home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#my-about">About</a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link" href="#my-experiences">Experiences</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
}

export default AppBar;