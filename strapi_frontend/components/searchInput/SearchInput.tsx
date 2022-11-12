import React from 'react'
import { InputAdornment, TextField } from '@mui/material'

type Props = {}

function SearchInput({}: Props) {
  return (
    <div>
      <TextField
        id="outlined-start-adornment"
        sx={{ m: 1, width: '25ch' }}
        InputProps={{
          startAdornment: <InputAdornment position="start">kg</InputAdornment>,
        }}
      />
    </div>
  )
}

export default SearchInput
