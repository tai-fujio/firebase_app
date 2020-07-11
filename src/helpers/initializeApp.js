import { firestore, initializeApp } from 'firebase/app'
import 'firebase/firestore'

initializeApp({
})

firestore().settings({timestampsInSnapshots: true})
