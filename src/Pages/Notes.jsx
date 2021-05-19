import { Container, Grid, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase'

function Notes () {
  const [notes, setNotes] = useState()
  const getData = async () => {
    const data = await db.collection('data').get()
    const notesData = []
    data.forEach((doc) => {
      notesData.push({
        category: doc.data().category,
        details: doc.data().details,
        id: doc.id,
        title: doc.data().title
      })
    })
    setNotes(notesData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container>
      <Grid container>
        {notes?.map(note => (
          <Grid item xs={12} sm={6} lg={4} key={note.id}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Notes
