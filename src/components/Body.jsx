import * as React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { IMaskInput } from 'react-imask'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import { useSnackbar } from 'notistack'
import './Body.scss'

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props
  return (
    <IMaskInput
      {...other}
      mask="(00) 00000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  )
})

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

function Body() {
  const [number, setNumber] = useState('(00) 00000-0000')
  const [text, setText] = useState('')
  const [Isgerated, setGerated] = useState(true)
  const [link, setLink] = useState('')
  const { enqueueSnackbar } = useSnackbar()

  const handleChangeNumber = (event) => {
    setNumber(event.target.value)
  }

  const sellMore = () => {
    window.open(
      'https://www.marketingwhats.com.br/?utm_source=Digital&utm_medium=Start&utm_campaign=Gerador',
      '_blank'
    )
  }

  const handleChangeText = (event) => {
    setText(event.target.value)
  }

  const copyLink = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        enqueueSnackbar('Texto copiado com sucesso!', { variant: 'success', anchorOrigin: { vertical: 'top' , horizontal: 'center' }})
      })
      .catch((err) => {
        enqueueSnackbar('Falha ao copiar link', {variant: 'error', anchorOrigin: { vertical: 'top' , horizontal: 'center' }})
      })
  }

  const reset = () => {
    setText('')
    setNumber('')
    setLink('')
    setGerated(true)
  }

  const handleGenerate = () => {
    const touchDevice = 'ontouchstart' in document.documentElement
    const key = touchDevice ? 'api' : 'web'
    if (number && number !== '(00) 00000-0000') {
      setLink(
        `https://${key}.whatsapp.com/send?phone=55${number.replace(
          /[^\d]+/g,
          ''
        )}&text=${text}`
      )
      setGerated(false)
    } else {
      enqueueSnackbar('Insira um número válido!', {variant: 'error', anchorOrigin: { vertical: 'top' , horizontal: 'center' }})
    }
  }

  return Isgerated ? (
    <Box className="main">
      <FormControl variant="outlined" className="fields">
        <InputLabel htmlFor="phone-number">Número</InputLabel>
        <Input
          value={number}
          onChange={handleChangeNumber}
          name="textmask"
          id="phone-number"
          inputComponent={TextMaskCustom}
          autoComplete="off"
        />
      </FormControl>
      <TextField
        id="message"
        label="Mensagem"
        variant="outlined"
        className="fields"
        onChange={handleChangeText}
      />
      <Button className="fields" variant="contained" onClick={handleGenerate}>
        Gerar link
      </Button>
      <Button className="fields" variant="contained" onClick={sellMore}>
        Venda mais com o Whatsapp
      </Button>
    </Box>
  ) : (
    <Box className="main">
      <TextField
        id="link"
        label="Link"
        variant="outlined"
        className="fields"
        value={link}
        disabled
      />
      <Button className="fields" variant="contained" onClick={copyLink}>
        Copiar link
      </Button>
      <Button className="fields" variant="contained" onClick={reset}>
        Gerar novo link
      </Button>
    </Box>
  )
}

export default Body
