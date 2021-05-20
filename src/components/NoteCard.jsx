import { Card, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons'
import React from 'react'

export default function NoteCard ({ note, handleDelete }) {
  console.log(note.title)
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
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
