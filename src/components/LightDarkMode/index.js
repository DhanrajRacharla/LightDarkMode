import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isLightOn: true}
  theModeIs = () => {
    this.setState(prevState => ({isLightOn: !prevState.isLightOn}))
  }
  textContent = () => {
    const {isLightOn} = this.state
    return isLightOn ? 'Light Mode' : 'Dark Mode'
  }
  render() {
    const {isLightOn} = this.state
    const card_ = isLightOn ? 'dark-mode' : 'light-mode'
    const head_ = isLightOn ? 'white' : 'black'

    return (
      <div className="container">
        <div className={`card ${card_}`}>
          <h1 className={`heading ${head_}`}>Click To Change Mode</h1>
          <div>
            <button type="button" className="btn" onClick={this.theModeIs}>
              {this.textContent()}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
