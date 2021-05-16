import { Button, Container, makeStyles, Typography } from '@material-ui/core'
import { KeyboardArrowRight } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue'
    }
  }
})

function CreateNote () {
  const classes = useStyles()

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
      <Button
        className={classes.btn}
        onClick={() => window.alert('Clicked')}
        type='submit'
        color='secondary'
        variant='contained'
        endIcon={<KeyboardArrowRight />}
      >Submit
      </Button>
    </Container>
  )
}

export default CreateNote
