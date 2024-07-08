import React from 'react';
class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Cart
            </a>
           
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
