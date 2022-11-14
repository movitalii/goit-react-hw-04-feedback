import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import css from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  
  const handleClick = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };   

  const totalFeedback = good + neutral + bad;

  const positiveFeedbackPercentage = Math.round((good * 100) / totalFeedback);
  

    return (
      <div className={css.wrapper}>
        <Section title="Please leave feedback">
        <FeedbackOptions 
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />          
        </Section>        
          {!totalFeedback ? (
          <Notification message="There is no feedback" />
          ) : (
        <Section title="Statistics">
        <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
        </Section>)
          }
      </div>
    );
  };