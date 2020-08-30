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
      className: "navbar navbar-light navbar-expand-md bg-faded justify-content-center"
    }, React.createElement("a", {
      href: "/members",
      className: "navbar-brand d-flex w-50 mr-auto"
    }, React.createElement("samp", {
      className: "title-font"
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
      href: "/members"
    }, React.createElement("span", {
      className: ""
    }, "Home"))), React.createElement("li", {
      className: "nav-item text-white mtext"
    }, React.createElement("a", {
      className: "nav-link",
      href: "/logout"
    }, React.createElement("span", {
      className: ""
    }, "Logout")))))
    );
  }
}

const domContainer = document.querySelector('#NavContainer');
ReactDOM.render(e(Navbar1), domContainer);