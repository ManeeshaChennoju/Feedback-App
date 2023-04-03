import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    Question: 'question_container',
    ThankYou: 'displayThankYouNone',
  }

  emojiClick = () => {
    this.setState({
      Question: 'displayQuestionNone',
      ThankYou: 'thankYou_container',
    })
  }

  render() {
    const {Question, ThankYou} = this.state
    const {emo} = this.props
    const {loveEmojiUrl, emojis} = emo
    return (
      <div className="bg_container">
        <div className={Question}>
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>
          <div className="emojis_container">
            {emojis.map(eachEmoji => (
              <li className="emoji_cont" key={eachEmoji.id}>
                <img
                  onClick={this.emojiClick}
                  className="image"
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                />
                <p className="emoji_name">{eachEmoji.name}</p>
              </li>
            ))}
          </div>
        </div>

        <div className={ThankYou}>
          <img src={loveEmojiUrl} alt="love emoji" className="loveEmoji" />
          <h1>Thank You</h1>
          <p className="feedback_text">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    )
  }
}

export default Feedback
