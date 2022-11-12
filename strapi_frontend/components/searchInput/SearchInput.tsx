import React, { useState } from 'react'
import { FormControl, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'

type Props = {}

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
    <div id="app">
      <FormControl className="">
        <TextField
          size="small"
          variant="outlined"
          onChange={handleChange}
          className=""
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
    </div>
  )
}

export default SearchInput
