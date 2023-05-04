import { Component } from "react";

class FeedBack extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      render(){
        return(
            <>
            <h2>Please leave feedback</h2>
            <form>

            </form>
            </>
        )
      }
}

export default FeedBack;