import { db } from '../config/firebase'

export const addData = ({ category, details, title, docKey }) => {
  db.collection(docKey).add({
    category,
    details,
    title
  })
    .then(() => {
      console.log('Document successfully written!')
    })
    .catch((error) => {
      console.error('Error writing document: ', error)
    })
}

export const deleteData = ({ id, docKey }) => {
  db.collection(docKey).doc(id).delete().then(() => {
    console.log('Document successfully deleted!')
  }).catch((error) => {
    console.error('Error removing document: ', error)
  })
}
