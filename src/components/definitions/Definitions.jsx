import React from 'react'
import "./definitions.css"

const Definitions = ({ word, meanings, category, theme }) => {

  const meaningElements = meanings.map((meaning, index) => (
    <div>
      {meaning.meanings.map((item) => (
        <>
          {meaning.phonetics[index]?.text && <p style={{ marginTop: "1rem" }}>{meaning.phonetics[index]?.text}</p>}
          {item.definitions.map((defs, index1) => (
            <div key={index1} className='singlemean' style={{ backgroundColor: theme ? "white" : "#282c34", color: theme ? "#282c34" : "#fff" }}>
              <p style={{ marginBottom: "1rem" }}>({item.partOfSpeech})</p>
              <span style={{marginBottom : "0.5rem"}}><b>Definition: </b>{defs.definition}</span>
              {defs.example && (
                <span style={{marginBottom : "0.5rem"}}>
                  <b>Example: </b> {defs.example}
                </span>
              )}
              {defs.synonyms.length > 0 && (
                <span style={{marginBottom : "0.5rem"}}>
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
          ))}
        </>
      ))}
    </div>
  ))

  console.log(meanings)

  return (
    <div className='meanings' style={{ borderColor: theme ? "#fff" : "#282c34" }}>
      {meanings[0]?.phonetics[meanings[0].phonetics.length - 1]?.audio && word && category === "en" && (
        <audio controls src={meanings[0].phonetics[meanings[0].phonetics.length - 1].audio && meanings[0].phonetics[meanings[0].phonetics.length - 1].audio} style={{ backgroundColor: "white", borderRadius: 10, minHeight: 50, width: "100%" }}>
        </audio>
      )}
      {!word ?
        <span className='subtitle' style={{ fontWeight: 200 }}>search a word</span> :
        meaningElements
      }
    </div>
  )
}

export default Definitions
