import app from "./server.js"
import mongodb from "mongodb"
import ContactsDAO from "./dao/ContactsDAO.js"
import dotenv from "dotenv"

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000
// const MongoClient = mongodb.MongoClient

// const mongo_username = process.env['MONGO_USERNAME']
// const mongo_password = process.env['MONGO_PASSWORD']

// const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.i4wepyd.mongodb.net/?retryWrites=true&w=majority`

// const port = 8000

MongoClient.connect(
  //URI,
  process.env.ATLAS_URI,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
  }
)
.catch(err => {
  console.error(err.stack)
  process.exit(1)
})
.then(async client => {
  await ContactsDAO.injectDB(client)
  app.listen(port, () =>{
      console.log(`listen on port ${port}`)
  })
})
// .then(async client => {
//   app.listen(port, () => {
//     console.log(`listening on port ${port}`)
//   })
// })

