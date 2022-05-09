import { TextField, Button } from '@mui/material'
import * as React from 'react'

function Body() {
  return (
    <React.Fragment>
      <TextField
        margin="dense"
        label="Número do celular"
        type="text"
        variant="outlined"
      />
    </React.Fragment>
  )
}

export default Body
