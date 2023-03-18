import { createTheme, MenuItem, TextField} from '@mui/material'
import { ThemeProvider } from '@mui/system';
import React from 'react'
import "./header.css"
import categories from '../../data/category';
import { light } from '@mui/material/styles/createPalette';

const header = ({category, setCategory, word, setWord, theme}) => {

  const darkTheme = createTheme({
		palette: {
			primary: {
				main: theme ? "#fff" : "#141414"
			},
			mode: theme ? "dark" : "light",
		},
	});

	function handleChange(language) {
		setCategory(language)
		setWord("")
	}

  return (
    <div className='header'>
      <div className='header__title'>
				{word ? word : <div>
					<div className='header__title-text1'>s</div>
					<div className='header__title-text2'>i</div>
					<div className='header__title-text3'>k</div>
					<div className='header__title-text4'>t</div>
					<div className='header__title-text5'>i</div>
					<div className='header__title-text6'>o</div>
					<div className='header__title-text7'>n</div>
					<div className='header__title-text8'>a</div>
					<div className='header__title-text9'>r</div>
					<div className='header__title-text10'>y</div>
				</div>}
			</div>
      <div className='inputs'>
				<ThemeProvider theme={darkTheme}>

        	<TextField 
						id="standard-basic" 
						className='search' 
						label="Search a Word" 
						variant='standard' 
						value={word} 
						onChange={e => setWord(e.target.value)}
					/>

					<TextField
						select
						className='select'
						label="Language"
						value={category}
						onChange={(e) => handleChange(e.target.value)}
						variant="standard"
        	>
            {categories.map((category) => (
							<MenuItem key={category.value} value={category.label}>{category.value}</MenuItem>
						))}
					</TextField>
					
				</ThemeProvider>
      </div>
    </div>
  )
}

export default header
