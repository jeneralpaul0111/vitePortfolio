import app from "./server.js"
import mongodb from "mongodb"
import ContactsDAO from "./dao/ContactsDAO.js"
import dotenv from "dotenv"

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
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


