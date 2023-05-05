import { Component } from 'react';

class Section extends Component {
  render() {
    console.log();
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

export default Section;
