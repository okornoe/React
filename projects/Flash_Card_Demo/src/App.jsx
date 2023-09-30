import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import FlashcardList from './FlashcardList'
import Flashcard from './Flashcard'
var cardId = 0

function App() {
 
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  var [id, setId] = useState(0)
  console.log(id)
  
  return (
    <>
      <FlashcardList flashcards={flashcards[id]} />
      <div>
        <button type='next' onClick= {() =>setId(id = Math.floor(Math.random() * 10))} >Next</button>
      </div>
    </>
    
  )
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "Who is the current President of Ghana",
    answer: "Nana Addo Danquah Akuffo Addo",
    options: [1,2,3,4]
  },
  {
    id: 2,
    question: "What is the name of the current seat of Government in Ghana",
    answer: "Jubilee House",
    options: ["Kelvin","Kofi","3","Anothy"]
  },

  {
    id: 3,
    question: "How many regions do Ghana currently have",
    answer: "16 Regions",
    options: ["Kelvin","Kofi","3","Anothy"]
  },
  
  {
    id: 4,
    question: "What is my name of the popular salve castle in Ghana",
    answer: "Elimina Castle",
    options: ["Kelvin","Kofi","3","Anothy"]
  },
  
  {
    id: 5,
    question: "What is the name of the international airport in Ghana",
    answer: "Kotoka Internaltional Airport",
    options: ["Kelvin","Kofi","3","Anothy"]
  },

  {
    id: 6,
    question: "What is the name of the capital city of Ghana",
    answer: "Accra",
    options: ["Kelvin","Kofi","3","Anothy"]
  },
  
  {
    id: 7,
    question: "What is the capital city of the Northern region",
    answer: "Tamale",
    options: ["Kelvin","Kofi","3","Anothy"]
  },
  
  {
    id: 8,
    question: "What is the capital city of Upper West region",
    answer: "Wa",
    options: ["Kelvin","Kofi","3","Anothy"]
  },
  
  {
    id: 9,
    question: "What is the capital city of the Ashanti region",
    answer: "Kumasi",
    options: ["Kelvin","Kofi","3","Anothy"]
  },

  {
    id: 10,
    question: "Which year did Ghana again Independence",
    answer: "1957",
    options: ["Kelvin","Kofi","3","Anothy"]
  }

]

export default App
