import { db } from '../config/firebase'

export const addData = ({ category, details, title }) => {
  console.log({ category, details, title })
  db.collection('data').add({
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
