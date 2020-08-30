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
        class: "navbar navbar-light navbar-expand-md bg-faded justify-content-center navcolor1"
      }, React.createElement("a", {
        href: "/members",
        class: "navbar-brand d-flex w-50 mr-auto"
      }, React.createElement("samp", {
        class: "text-white textNav"
      }, "ForMe")), React.createElement("button", {
        class: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#collapsingNavbar3"
      }, React.createElement("span", {
        class: "navbar-toggler-icon"
      })), React.createElement("div", {
        class: "navbar-collapse collapse w-100",
        id: "collapsingNavbar3"
      }, React.createElement("ul", {
        class: "nav navbar-nav ml-auto w-100 justify-content-end"
      }, React.createElement("li", {
        class: "nav-item"
      }, React.createElement("a", {
        class: "nav-link ",
        href: "/logout"
      }, React.createElement("span", {
        class: "text-white"
      }, "Logout"))))));
  }
}

const domContainer = document.querySelector('#NavContainer');
ReactDOM.render(e(Navbar1), domContainer);