import { Button, Container, FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField, Typography } from '@material-ui/core'
import { KeyboardArrowRight } from '@material-ui/icons'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { addData } from '../utils/firebaseUtils'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

function CreateNote () {
  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState()
  const [details, setDetails] = useState()
  const [titleError, setTitleError] = useState()
  const [detailError, setDetailsError] = useState()
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(!title)
    setDetailsError(!details)
    if (title && details) {
      addData({ title, details, category })
      history.push('/')
    }
  }

  return (
    <Container>
      <Typography
        component='h2'
        variant='h6'
        gutterBottom
        color='textSecondary'
      >
        Create a New Note!
      </Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label='Note Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={titleError}
        />
        <TextField
          className={classes.field}
          label='Details'
          onChange={(e) => setDetails(e.target.value)}
          variant='outlined'
          multiline
          rows={4}
          color='secondary'
          fullWidth
          required
          error={detailError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value='money' control={<Radio />} label='Money' />
            <FormControlLabel value='todos' control={<Radio />} label='Todos' />
            <FormControlLabel value='reminders' control={<Radio />} label='Reminders' />
            <FormControlLabel value='work' control={<Radio />} label='Work' />
          </RadioGroup>
        </FormControl>
        <Button
          type='submit'
          color='primary'
          variant='contained'
          endIcon={<KeyboardArrowRight />}
        >Submit
        </Button>
      </form>
    </Container>
  )
}

export default CreateNote
