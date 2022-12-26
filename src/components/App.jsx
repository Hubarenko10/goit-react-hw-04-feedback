import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";



export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleIncrement = (option)=> {
  this.setState((prevState)=>({[option]: prevState[option] + 1}))
  }
  countTotalFeedback = () => {
  const total = Object.values(this.state);
  return total.reduce((acc,value) => acc + value,0);
  }
  countPositiveFeedbackPercentage = (good,total) => {
  return  Math.round((100 * good) / total);
  }
  render(){
    const {good,neutral,bad} = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(good, total);
    const options = Object.keys(this.state);
    return (
      <>
      <Section 
      title= "Please leave feedback">
      <FeedbackOptions 
      options={options} 
      onLeaveFeedback={this.handleIncrement}/>
      </Section>
      
      <Section
      title="Statistics">
       {this.countTotalFeedback() ? <Statistics 
       good={good} 
       neutral={neutral} 
       bad={bad}
       total={total}
       positivePercentage={percentage}
       /> : <Notification message="There is no feedback"/>
       }
       
      </Section>
      </>
    );
  }
 
};
