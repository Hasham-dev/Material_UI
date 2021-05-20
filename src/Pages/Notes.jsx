import { Container, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard'
import { db } from '../config/firebase'
import { deleteData } from '../utils/firebaseUtils'

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

  const handleDelete = async (id) => {
    await deleteData(id)
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container>
      <Grid container spacing={3}>
        {notes?.map(note => (
          <Grid item xs={12} sm={6} lg={4} key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Notes
