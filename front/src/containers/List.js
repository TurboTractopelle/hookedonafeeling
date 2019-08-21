import React, { Component } from "react";
import ItemSmall from "../components/ItemSmall/ItemSmall";
import axios from "axios";

class List extends Component {
  state = {
    list: [],
    loading: true
  };

  componentDidMount() {
    console.log("did mount");
    axios
      .get("http://localhost:4000/villes")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    let list;

    if (this.state.list.length === 0 && this.state.loading) {
      list = "Loading";
    } else if (this.state.list.length === 0 && !this.state.loading) {
      list = "Nothing to display";
    } else {
      list = (
        <ul>
          <ItemSmall data={{ name: 1 }} />
        </ul>
      );
    }

    return <div>{list}</div>;
  }
}

export default List;
