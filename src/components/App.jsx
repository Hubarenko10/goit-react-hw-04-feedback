import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleIncrement = type => {
    switch (type) {
      case 'good':
        return setGood(prevGood => prevGood + 1);
      case 'neutral':
        return setNeutral(prevNeutral => prevNeutral + 1);
      case 'bad':
        return setBad(prevBad => prevBad + 1);
      default:
        throw new Error('Error');
    }
  };
  const countTotalFeedback = () => {
    const total = Object.values([good, neutral, bad]);
    return total.reduce((acc, value) => acc + value, 0);
  };
  const countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((100 * good) / total);
  };
  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage(good, total);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
