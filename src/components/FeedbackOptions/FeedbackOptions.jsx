import PropTypes from 'prop-types';
import { Button } from "./FeedbackOptionsStyle"

export const FeedbackOptions = ({options,onLeaveFeedback})=>{
    return options.map((option)=>{
    return(
        <Button key={option} onClick={()=>{onLeaveFeedback(option)}} type="button">
            
            {firstLetterToUpper(option)}
        </Button>
        
        )
    })
}



function firstLetterToUpper(string){
return string[0].toUpperCase() + string.substring(1)
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}