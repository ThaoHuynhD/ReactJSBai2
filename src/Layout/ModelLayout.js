import React, { Component } from "react";

export default class ModelLayout extends Component {
  render() {
    return (
      <div className="model__content">
        <div className="model">
          <img src="./img/model.jpg" alt="model1" />
        </div>
        <div className="model">
          <img src="./img/model.jpg" alt="model2" />
        </div>
      </div>
    );
  }
}
