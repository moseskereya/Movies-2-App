import React from 'react';

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By: 
            <span className="text-warning font-weight-normal">
            Moses
            </span>
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            > see more movies on
              OMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
