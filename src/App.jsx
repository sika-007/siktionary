import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"
import { alpha, Container } from '@mui/system'
import { Header, Definitions } from "./components"
import { styled, Switch } from '@mui/material'
import { grey } from '@mui/material/colors'

const App = () => {

  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState("en")
  const [theme, setTheme] = useState(true) 

  const DarkMode = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: grey[500],
      '&:hover': {
        backgroundColor: alpha(grey[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: grey[300],
    },
  }));

  // This function has been called in the useEffect hook below
  const dictionaryApi = async() => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      const data = response.data
      setMeanings(data)
    } catch (error) {
      console.log(error)
      setMeanings([])
    }
  }

  useEffect(() => {
    word && dictionaryApi()
  }, [word, category])


  return (
    <div className='app' style={{height: "100vh", 
    backgroundColor: theme ? "#282c34" : "#fff", 
    color: theme ? "white" : "#141414", transition: "1s ease-in-out"}}>
      <Container maxWidth="md" style={{display: 'flex', flexDirection: "column", height: "100vh", justifyContent: "space-evenly"}}>

        <div style={{position: "absolute", top: 0, right: 15, paddingTop: 10}}>
          <span>{theme ? "dark" : "light"} mode</span>
          <DarkMode sx={{transition: "all 2s ease-in-out"}} checked={theme} onClick={() => setTheme(prev => !prev)} />
        </div>

        <Header 
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          theme={theme}
        />
        {meanings ? <Definitions 
          word={word}
          meanings={meanings}
          category={category}
          theme={theme}
        /> : <div></div>}
      </Container>
    </div>
  )
}

export default App
