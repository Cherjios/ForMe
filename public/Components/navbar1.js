'use strict';

const e = React.createElement;

class Navbar1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {


    return e(

      "nav", {
        className: "navbar navbar-light navbar-expand-md bg-faded justify-content-center navcolor1"
      }, React.createElement("a", {
        href: "/members",
        className: "navbar-brand d-flex w-50 mr-auto"
      }, React.createElement("samp", {
        className: "text-white textNav"
      }, "ForMe")), React.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#collapsingNavbar3"
      }, React.createElement("span", {
        className: "navbar-toggler-icon"
      })), React.createElement("div", {
        className: "navbar-collapse collapse w-100",
        id: "collapsingNavbar3"
      }, React.createElement("ul", {
        className: "nav navbar-nav ml-auto w-100 justify-content-end"
      }, React.createElement("li", {
        className: "nav-item"
      }, React.createElement("a", {
        className: "nav-link ",
        href: "/logout"
      }, React.createElement("span", {
        className: "text-white"
      }, "Logout"))))));
  }
}

const domContainer = document.querySelector('#NavContainer');
ReactDOM.render(e(Navbar1), domContainer);