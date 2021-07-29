import React, { Component } from "react"; // the react has children called Fragments. We can use them instead of div

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter-Unmount");
  }

  // that when rendered. We before had h1 Hello World, when we have span we can render dynamically
  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className={"btn btn-secondary btn-sm"}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    ); // previous: <img src={this.sitate.imageUrl} alt=''/>, <span>{this.formatCount()}</span>. Adding classes to span formats the kind of data we have. Badge puts a badge, primary stands for the color, m-2 puts margin 2, sm defines the size
  } // if I put styles up then refer to it later it will change the style
  // in ul: taking a string (tag) and rendering it into javascript object
  // in li: whenever I use the map method to make a list, I need to work with a key attribute, otherwise it doesn't work with DOM. Here I can use the tag as every value is unique, but in an app I may have an object

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}
// this is a method, we format the count element

export default Counter; // we create the class and then we export it it differently, otherwise we could make line 3 export default

//  <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>

////////////////////
