import { height, width } from '@mui/system'
import React, { createRef, useRef } from 'react'
import "./definitions.css"

const Definitions = ({ word, meanings, category, theme }) => {

  const ref = useRef()

  const meaningElements = meanings.map(meaning => (
    meaning.meanings.map(item => (
      item.definitions.map((defs, index) => (
        <div key={index} className='singlemean' style={{ backgroundColor: theme ? "white" : "#282c34", color: theme ? "#282c34" : "#fff"}}>
          <span><b>Definition: </b>{defs.definition}</span>
          <hr style={{ borderColor: "black" , width: "100%", height: "1px" }} />
          {defs.example && (
            <span>
              <b>Example: </b> {defs.example}
            </span>
          )}
          {defs.synonyms.length > 0 && (
            <span>
              <b>Synonyms: </b> {defs.synonyms.map((s, index) => {
                  if (defs.synonyms.length === 1) {
                    return `${s}.`
                  } else if (index + 1 === defs?.synonyms.length) {
                    return `${s}.`
                  } else {
                    return `${s}, `
                  }
                }
                )}
            </span>
          )}
          {defs.antonyms.length > 0 && (
            <span>
              <b>Antonyms: </b>
              {defs.antonyms.map((s, index) => {
                if (defs.antonyms.length === 1) {
                  return `${s}.`
                } else if (index + 1 === defs?.antonyms.length) {
                  return `and ${s}.`
                } else {
                  return `${s}, `
                }
              }
              )}
            </span>
          )}
        </div>
      ))
    ))
  ))

  console.log(ref.current)

  return (
    <div className='meanings' style={{borderColor: theme ? "#fff" : "#282c34"}}>
      {meanings[0] && word && category === "en" && (
        <audio controls ref={ref} src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} style={{backgroundColor: "white", borderRadius: 10, minHeight: 50, width: "100%"}}>
          Your browser does not support audios
        </audio>
      )}
      {!word ?
        <span className='subtitle' style={{fontWeight: 200}}>search a word</span> :
        meaningElements
      }
    </div>
  )
}

export default Definitions
