"use strict"

// dependencies
import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

// like-button component
const LikeCounter = React.createClass({
  like() {
    store.dispatch({type: 'LIKE'})
  },
  dislike() {
    store.dispatch({type: 'DISLIKE'})
  },
  render() {
    return (
      <div>
        <h3>{store.getState()}</h3>
        <button onClick={this.like}>Like</button>
        <button onClick={this.dislike}>Dislike</button>
      </div>
    )
  }
})

// reducer for the like button
const likes = (state = 0, action) => {
  switch(action.type) {
    case 'LIKE':
      return state + 1
    case 'DISLIKE':
      return state -1
    default:
      return state
  }
}

// create a store, where the state lives
const store = createStore(likes);

// update the view/DOM with the new state
const renderView = () => {
  // totalLikes.innerText = store.getState();
  ReactDOM.render(
    // <LikeCounter/>,
    <LikeCounter likeCount={store.getState()}/>,
    document.getElementById('like-counter')
  )
}

// re-render every time the store is updated, callback for the store when it is updated with a new state
store.subscribe(renderView)

// called once for initialization
renderView()


///////////////////
// const likeButton = document.getElementById("like-button")
// const dislikeButton =
// document.getElementById("dislike-button")
// const totalLikes = document.getElementById("total-likes")
//
// const likes = (state = 0, action) => {
//   switch(action.type) {
//     case 'LIKE':
//       return state + 1
//     case 'DISLIKE':
//       return state -1
//     default:
//       return state
//   }
// }
//
// // create a store, where the state lives
// const store = createStore(likes);
//
// // update the DOM with the new state
// const renderView = () => {
//   totalLikes.innerText = store.getState();
// }
//
// // re-render every time the store is updated
// store.subscribe(renderView)
//
// // make the like button dispatch a "LIKE" action
// likeButton.addEventListener('click', (e) => {
//   store.dispatch({type: 'LIKE'})
// })
//
// // make the dislike button dispatch a "DISLIKE" action
// dislikeButton.addEventListener('click', (e) => {
//   store.dispatch({type: 'DISLIKE'})
// })
//
// // called once for initialization
// renderView()
//
