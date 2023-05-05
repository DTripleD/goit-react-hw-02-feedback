import { Component } from 'react';
import { Button, ButtonWrapper } from './FeedbackOptions.styled';

class Feedback extends Component {
  render() {
    return (
      <div>
        <ButtonWrapper>
          {this.props.options.map(option => (
            <Button
              type="button"
              onClick={this.props.onLeaveFeedback}
              key={option}
              value={option}
            >
              {option}
            </Button>
          ))}
        </ButtonWrapper>
      </div>
    );
  }
}

export default Feedback;
