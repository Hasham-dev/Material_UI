import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core'
import { blue, green, red, yellow } from '@material-ui/core/colors'
import { DeleteOutline } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category === 'work') {
        return red[700]
      } else if (note.category === 'reminders') {
        return blue[700]
      } else if (note.category === 'todos') {
        return yellow[700]
      } else if (note.category === 'money') {
        return green[700]
      }
    }
  }
})

export default function NoteCard ({ note, handleDelete }) {
  const classes = useStyles(note)
  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
        }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutline />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant='body1' color='textSecondary'>
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
