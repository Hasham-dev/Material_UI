import { Container, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard'
import { db } from '../config/firebase'
import { deleteData } from '../utils/firebaseUtils'
import Masonry from 'react-masonry-css'
import { BookLoader } from 'react-awesome-loaders'
import { useAuth0 } from '@auth0/auth0-react'

function Notes () {
  const [notes, setNotes] = useState()
  const [loading, setLoading] = useState()
  const { user, isLoading } = useAuth0()

  const getData = async () => {
    setLoading(true)
    const data = await db.collection(user?.email).get()
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
    setLoading(false)
  }

  const handleDelete = async (id) => {
    await deleteData({ id, docKey: user.email })
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  useEffect(() => {
    user?.email && getData()
    // eslint-disable-next-line
  }, [user])

  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  if (isLoading || loading) {
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

  if (!notes?.length) return <Typography className='loader' variant='h4'>Opss! No Notes Found...</Typography>

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
