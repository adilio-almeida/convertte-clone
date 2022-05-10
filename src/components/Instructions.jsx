import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'
import './Instructions.scss'

function Instructions() {
  return (
    <Box>
      <Typography variant="h5">Como funciona?</Typography>
      <div className="steps">
        <div className="topic">
          <h2 className="p">1. </h2>
          <Typography variant="p">
            Insira o nº do WhatsApp Ex: 85 9 9660-5866
          </Typography>
        </div>
        <div className="topic">
          <h2 className="p">2. </h2>
          <Typography variant="p">
            Escreva a mensagem padrão que será exibida
          </Typography>
        </div>
        <div className="topic">
          <h2 className="p">3. </h2>
          <Typography variant="p">Clique em “ GERAR LINK ”</Typography>
        </div>
        <div className="topic">
          <h2 className="p">4. </h2>
          <Typography variant="p">Copie o link e compartilhe</Typography>
        </div>
        <div className="topic">
          <h2 className="p">5. </h2>
          <Typography variant="p">Antes de usar, faça o teste</Typography>
        </div>
      </div>
    </Box>
  )
}

export default Instructions
