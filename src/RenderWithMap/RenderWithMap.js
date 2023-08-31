import React, { Component } from "react";
import { glassList } from "./dataGlasses";

export default class RenderWithMap extends Component {
  renderList = () => {
    return glassList.map((item, index) => {
      let { id, price, name, url, desc } = item;
      return (
        <div className="col">
          <div key={index} className="glass__item">
            <img src={url} alt />
            {/* <div className="glass__tag">
                <h5 className="name">{name}</h5>
                <h8 className="price">{price}</h8>
                <p className="desc">{desc}</p>
              </div> */}
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="glass__content">
        <div className="container">
          <div className="row row-cols-5">{this.renderList()}</div>
        </div>
      </div>
    );
  }
}
