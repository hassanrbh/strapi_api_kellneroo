import React, { useState } from 'react'
import { FormControl, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import styles from './Search.module.css'
import { withStyles } from '@mui/styles'

const CssTextField = withStyles({
  root: {
    '& .MuiTextField-root': {
      border: '0.1rem solid #d5d5d5',
    },
    '& label.Mui-focused': {},
    '& .MuiInput-underline:after': {},
    '& .MuiOutlinedInput-root': {
      marginTop: '0.5rem',
      '& input': {
        fontSize: '1.5rem',
        padding: '1.5rem',
        fontFamily: 'archiaregular ',
      },
      '& fieldset': {
        borderColor: '#d5d5d5',
      },
      '&:hover fieldset': {
        borderColor: 'transparent',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4a7081',
      },
    },
  },
})(TextField)

function SearchInput() {
  const [showClearIcon, setShowClearIcon] = useState('none')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === '' ? 'none' : 'flex')
  }

  const handleClick = (): void => {
    console.log('clicked the clear icon...')
  }

  return (
    <>
      <FormControl className={styles.form__control}>
        <CssTextField
          id="search-input"
          size="small"
          placeholder="Stadt, Postleitzahl"
          variant="outlined"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="large" className={'text-5xl'} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                style={{ display: showClearIcon }}
                onClick={handleClick}
              >
                <ClearIcon />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </>
  )
}

export default SearchInput
