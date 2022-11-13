import React, { useState } from 'react'
import {
  FormControl,
  InputAdornment,
  OutlinedInputProps,
  TextField,
  TextFieldProps,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import styles from './Search.module.css'
import { createStyles, withStyles, makeStyles } from '@mui/styles'

type Props = {}

const CssTextField = withStyles({
  root: {
    '& .MuiTextField-root': {
      border: '1px solid #d5d5d5',
    },
    '& label.Mui-focused': {
      // color: 'green',
    },
    '& .MuiInput-underline:after': {
      // borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      marginTop: '5px',
      '& input': {
        fontSize: '15px',
        fontFamily: 'archiaregular',
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

function SearchInput({}: Props) {
  const [showClearIcon, setShowClearIcon] = useState('none')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === '' ? 'none' : 'flex')
  }

  const handleClick = (): void => {
    // TODO: Clear the search input
    console.log('clicked the clear icon...')
  }

  return (
    <>
      <FormControl className={styles.form__control}>
        {/* <CssTextField label="Custom CSS" variant="outlined" /> */}
        <CssTextField
          injectFirst
          id="search-input"
          size="small"
          placeholder="Stadt, Postleitzahl"
          variant="outlined"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
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
