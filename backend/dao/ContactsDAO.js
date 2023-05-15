import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId

let contacts

export default class ContactsDAO {
  static async injectDB(conn) {
    if (contacts) {
      return
    }
    try {
      contacts = await conn.db("contactsDB").collection("contacts_tbl")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }

  static async addContact(contactID, contactName, phone, email, subject, message) {
    try {
      const contactDoc = {
        contactID: contactID,
        contactName: contactName,
        phone: phone,
        email: email,
        subject:subject,
        message: message,
      }
      return await contacts.insertOne(contactDoc)
    } catch (e) {
      console.error(`Unable to post review: ${e}`)
      return {error: e}
    }
  }

  static async getContact(contactID) {
    try {
      return await contacts.findOne({_id: new ObjectId(contactID)})
    } catch (e) {
      console.error(`Unable to get contact: ${e}`)
      return {e}
    }
  }

  static async updateContact(contactID, contactName, phone, email,subject, message) {
     try {
      const updateResponse = await contacts.updateOne(
        { _id: ObjectId(contactID)},
        { $set: {contactName:contactName, phone:phone, email:email,subject:subject, message:message}}
      )
      return updateResponse
     } catch (e) {
      console.error(`Unable to update contact: ${e}`)
      return {error: e}
     }
  }

  static async getContactsByContactID(contactID) {
    try {
      const cursor = await contacts.find({contactID:parseInt(contactID)})
      return cursor.toArray()
    } catch (e) {
      console.error(`Unable to get contact: ${e}`)
      return {error}
    }
  }

}