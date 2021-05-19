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
    <div>
      Notes
      {notes?.map(note => (
        <p key={note.id}>{note.title}</p>
      ))}
    </div>
  )
}

export default Notes
