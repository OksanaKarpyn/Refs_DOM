import React from "react";
class Goods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="goods-block">
          <img src={this.props.image} alt="" />
          <p>{this.props.title}</p>
          <p>{this.props.cost}</p>
          <button className="add-to-cart" data-key={this.props.articul}>
            Add to cart
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default Goods;
