import ContactsDAO from "../dao/ContactsDAO.js"

export default class ContactsController {
  static async apiPostContacts(req, res, next) {
    try {
      const contactID = parseInt(req.body.contactID)
      const contactName = req.body.contactName
      const phone = req.body.phone
      const email = req.body.email
      const subject = req.body.subject
      const message = req.body.message
      
      const contactResponse = await ContactsDAO.addContact(
        contactID,
        contactName,
        phone,
        email,
        subject,
        message
      )
      res.json({ status: "success"})
    } catch (e) {
      res.status(500).json({error: e.message})
    }
  }

  static async apiGetContact(req, res, next) {
    try {
      let id = req.params.id || {}
      let contact = await ContactsDAO.getContact(id)
      console.log(id)
      if (!contact) {
        res.status(404).json({ error: "Not found"})
        return
      }
      res.json(contact)
    } catch (e) {
      console.log(`api, ${e}`)
    }
  }

  static async apiUpdateContacts(req, res, next) {
    try {
      const contactID = req.params.id
      const contactName = req.body.contactName
      const phone = req.body.phone
      const email = req.body.email
      const subject = req.body.subject
      const message = req.body.message

      const contactResponse = await ContactsDAO.updateContact(
        contactID,
        contactName,
        phone,
        email,
        subject,
        message
      )

      var {error} =contactResponse
      if (error) {
        res.status(400).json({error})
      }

      if (contactResponse.modifiedCount === 0) {
        throw new Error(
          "unable to update contact"
        )
      }
      
      res.jason({status: "success"})
    } catch (e) {
      res.status(500).json({error: e.message})
    }
  }

  static async apiDeleteContacts(req, res, next) {
    try {
      const contactID = req.params.id
      const contactResponse = await ContactsDAO.deleteContact(contactID)
      res.json({status: "success"})
    } catch (e) {
      res.status(500).json({error: e.message})
    }
  }

  static async apiGetContacts(req, res, next) {
    try {
      let id = req.params.id || {}
      let contacts = await ContactsDAO.getContactsByContactID(id)
      if(!contacts) {
        res.status(404).json({ error: "Not found"})
        return
      }
      res.json(contacts)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({error: e})
    }
  }

}