"use strict"

// import React from 'react'
// import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const likeButton = document.getElementById("like-button")
const dislikeButton =
document.getElementById("dislike-button")
const totalLikes = document.getElementById("total-likes")

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

// update the DOM with the new state
const renderView = () => {
  totalLikes.innerText = store.getState();
}

// re-render every time the store is updated
store.subscribe(renderView)

// make the like button dispatch a "LIKE" action
likeButton.addEventListener('click', (e) => {
  store.dispatch({type: 'LIKE'})
})

// make the dislike button dispatch a "DISLIKE" action
dislikeButton.addEventListener('click', (e) => {
  store.dispatch({type: 'DISLIKE'})
})

// called once for initialization
renderView()
