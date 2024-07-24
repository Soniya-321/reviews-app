// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeId: 0}

  reviewItem = review => {
    const {imgUrl, username, description, companyName} = review
    return (
      <div className="container">
        <img className="image" src={imgUrl} alt={username} />
        <p className="name">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeId} = this.state
    if (activeId > 0) {
      this.setState(prevState => ({
        activeId: prevState.activeId - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {activeId} = this.state
    const {reviewsList} = this.props
    if (activeId < reviewsList.length - 1) {
      this.setState(prevState => ({activeId: prevState.activeId + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeId} = this.state
    const currentReview = reviewsList[activeId]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="toggle-container">
          <button
            className="button"
            type="button"
            data-testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow"
              alt="left arrow"
            />
          </button>
          {this.reviewItem(currentReview)}
          <button
            className="button"
            type="button"
            data-testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
