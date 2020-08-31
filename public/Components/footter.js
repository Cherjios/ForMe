'use strict';

// const e = React.createElement;

class Footer extends React.Component {
  

  render() {


    return React.createElement("footer", null, React.createElement("div", {
      class: "container-fluid sfooter"
    }, React.createElement("div", {
      class: "row"
    }, React.createElement("div", {
      class: "col"
    }, React.createElement("h3", {
      class: " text-center"
    }, "Sergio Lopez"))), React.createElement("div", {
      class: "container text-center"
    }, React.createElement("div", {
      class: "row"
    }, React.createElement("div", {
      class: "col-md-4 col-sm-4"
    }, React.createElement("a", {
      class: "m-4",
      href: "mailto:slopez0286@gmail.com?subject=Mail-frommy-Website",
      target: "_blank"
    }, React.createElement("img", {
      src: "https://img.icons8.com/material-rounded/48/000000/important-mail.png"
    }))), React.createElement("div", {
      class: "col-md-4 col-sm-4"
    }, React.createElement("a", {
      class: "m-4",
      href: "https://github.com/Cherjios",
      target: "_blank"
    }, React.createElement("img", {
      src: "https://img.icons8.com/material-sharp/48/000000/github.png"
    }))), React.createElement("div", {
      class: "col-md-4 col-sm-4"
    }, React.createElement("a", {
      class: "m-4",
      href: "https://www.linkedin.com/in/sergio-lopez-81790579/",
      target: "_blank"
    }, React.createElement("img", {
      src: "https://img.icons8.com/ios-filled/50/000000/linkedin.png"
    })))), React.createElement("br", null), React.createElement("div", {
      class: "row"
    }, React.createElement("div", {
      class: "col"
    }, React.createElement("h4", null, React.createElement("a", {
      class: "repoLink",
      href: "https://github.com/Cherjios/Sign-my-form"
    }, "Respo Link")))))));
  }
}

const domContainerFooter = document.querySelector('#FooterHere');
ReactDOM.render(React.createElement(Footer), domContainerFooter);