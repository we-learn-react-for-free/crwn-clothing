import React, { Component } from "react";
import PropTypes from "prop-types";
import SHOP_DATA from "./data";
import CollectionPreview from "../../components/preview-collection/component";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  componentWillMount() {}

  componentDidMount() {
    console.log(this.state.items);
  }

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    const { collections } = this.state;
    const mapped = collections.map(({ id, ...otherCollection }) => (
      <CollectionPreview key={id} {...otherCollection} />
    ));
    return <div className="shop-page">{mapped}</div>;
  }
}

ShopPage.propTypes = {};

export default ShopPage;
