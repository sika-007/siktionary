import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"
import { Container } from '@mui/system'
import { Header } from "./components"

const App = () => {

  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState("en")

  // This function has been called in the useEffect hook below
  const dictionaryApi = async() => {
    try {
      const response = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/plane")
      const data = response.data
      setMeanings(data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(meanings)

  useEffect(() => {
    dictionaryApi()
  }, [])


  return (
    <div className='app' style={{height: "100vh", backgroundColor: "#282c34", color: "white"}}>
      <Container maxWidth="md" style={{display: 'flex', flexDirection: "column", height: "100vh"}}>
        <Header 
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
      </Container>
    </div>
  )
}

export default App
