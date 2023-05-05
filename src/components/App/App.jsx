import Feedback from 'components/FeedbackOptions/FeedbackOptions';
import Statistic from 'components/Statistic/Statistic';
import Section from 'components/Section/Section';
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
    return (
      <AppWrapper>
        <Section title="Please leave feedback">
          <Feedback options={btnNames} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistic>
        </Section>
      </AppWrapper>
    );
  }
}

export default App;