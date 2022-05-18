import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  onSubscription = () => {
    this.setState(presentState => ({isClicked: !presentState.isClicked}))
  }

  buttonText = () => {
    const {isClicked} = this.state
    return isClicked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.buttonText()
    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button type="button" onClick={this.onSubscription}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
