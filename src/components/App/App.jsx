import Feedback from 'components/FeedbackOptions/FeedbackOptions';
import Statistic from 'components/Statistic/Statistic';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import { Component } from 'react';
import { AppWrapper } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    const name = evt.target.value;
    this.setState({ [name]: this.state[name] + 1 });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    return total.reduce((acc, num) => {
      acc += num;
      return acc;
    });
  };

  countPositiveFeedbackPercentage = () => {
    return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const btnNames = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <AppWrapper>
        <Section title="Please leave feedback">
          <Feedback options={btnNames} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </AppWrapper>
    );
  }
}

export default App;
