import { Component } from "react";
class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  handleClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((image, index) => {
            return (
              // eslint-disable-next-line
              <img
                key={image}
                src={image}
                className={index === active ? "active" : ""}
                alt="pet"
                data-index={index}
                onClick={this.handleClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
