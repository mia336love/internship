import "./CatsPics.css";
import React, { Component } from "react";

class CatsPics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCat: null,
    };
  }

  handleCatClick = (event) => {
    const catId = event.target.id;
    console.log(catId);
    this.setState({ currentCat: catId });
  };

  render() {
    return (
      <div className="cats-pics-main">
        <img
          id="cat1"
          alt="cat1"
          src="https://i.pinimg.com/564x/69/17/7f/69177f2d928d3be2c3b230634335a3b4.jpg"
          onClick={this.handleCatClick}
        />
        <img
          id="cat2"
          alt="cat2"
          src="https://i.pinimg.com/736x/57/49/ae/5749aec49970cb9bd9ab456a920610cc.jpg"
          onClick={this.handleCatClick}
        />
        <img
          id="cat3"
          alt="cat3"
          src="https://i.pinimg.com/736x/71/07/c8/7107c82a39b5b2c14f6c9d44625be372.jpg"
          onClick={this.handleCatClick}
        />
        <img
          id="cat4"
          alt="cat4"
          src="https://i.pinimg.com/564x/9e/3d/70/9e3d702963c45425f74979d85cfe38aa.jpg"
          onClick={this.handleCatClick}
        />
        <img
          id="cat5"
          alt="cat5"
          src="https://i.pinimg.com/736x/5a/55/98/5a5598ab6cb1aaa3ae7d3d7f40861b99.jpg"
          onClick={this.handleCatClick}
        />
        <img
          id="cat6"
          alt="cat6"
          src="https://i.pinimg.com/736x/a3/94/e7/a394e7b5f57eb7791d4a57a92370c7b1.jpg"
          onClick={this.handleCatClick}
        />
      </div>
    );
  }
}

export default CatsPics;
