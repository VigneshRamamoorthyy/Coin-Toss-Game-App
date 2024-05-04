import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tail: 0,
    head: 0,
    total: 0,
    tossImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      console.log(tossResult)
      this.setState(prevState => ({
        head: prevState.head + 1,
        total: prevState.total + 1,
        tossImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tail: prevState.tail + 1,
        total: prevState.total + 1,
        tossImg: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {tail, head, total, tossImg} = this.state
    console.log(total)
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          <img src={tossImg} alt="toss result" className="toss-img" />
          <button
            className="toss-coin-btn"
            type="button"
            onClick={this.onTossCoin}
          >
            Toss Coin{' '}
          </button>
          <p className="result">Total: {total}</p>
          <p className="result">Heads: {head}</p>
          <p className="result">Tails: {tail}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
