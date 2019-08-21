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
    setTimeout(() => {
      axios
        .get("http://localhost:4000/todos")
        .then(res => {
          console.log(res);
          this.setState(prevState => ({
            ...prevState,
            loading: false,
            list: res.data
          }));
        })
        .catch(err => console.log(err));
    }, 1000);
  }

  render() {
    let list;

    if (this.state.loading) {
      list = "Loading...";
    } else {
      if (this.state.list.length === 0) {
        list = "Nothing to display";
      } else {
        list = (
          <ul>
            <ItemSmall data={{ name: 1 }} />
          </ul>
        );
      }
    }

    return <div>{list}</div>;
  }
}

export default List;
