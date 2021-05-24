import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard'
import { db } from '../config/firebase'
import { deleteData } from '../utils/firebaseUtils'
import Masonry from 'react-masonry-css'
import { BookLoader } from 'react-awesome-loaders'

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

  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  if (!notes) {
    return (
      <BookLoader
        className='loader'
        background='linear-gradient(135deg, #ff4081, #c51162)'
        desktopSize='60px'
        mobileSize='40px'
        textColor='#ff4081'
      />
    )
  }
  return (
    <Container>
      <Masonry
        breakpointCols={breakPoints}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {notes?.map(note => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}

export default Notes
