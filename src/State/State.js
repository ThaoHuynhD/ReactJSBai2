import React, { Component } from "react";
import { glassList } from "./dataGlasses";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSource: glassList[0].url,
      name: glassList[0].name,
      price: glassList[0].price,
      desc: glassList[0].desc,
    };
  }

  OpenTestGlass = (index) => {
    this.setState({
      imgSource: glassList[index].url,
      name: glassList[index].name,
      price: glassList[index].price,
      desc: glassList[index].desc,
    });
  };
  renderList = () => {
    return glassList.map((item, index) => {
      let { url } = item;
      return (
        <div className="col">
          <div
            onClick={() => this.OpenTestGlass(index)}
            key={index}
            className="glass__item"
          >
            <img src={url} alt="" />
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="main__body">
        <div className="model__content">
          <div className="model">
            <img src="./img/model.jpg" alt="model1" />
            <div className="glass__test">
              <img src={this.state.imgSource} alt="" />
              <div className="glass__tag">
                <h5 className="name">{this.state.name}</h5>

                <h8 className="price">{this.state.price}$</h8>
                <p className="desc">{this.state.desc}</p>
              </div>
            </div>
          </div>
          <div className="model">
            <img src="./img/model.jpg" alt="model2" />
          </div>
        </div>
        <div className="glass__content">
          <div className="container">
            <div className="row row-cols-5">{this.renderList()}</div>
          </div>
        </div>
      </div>
    );
  }
}
