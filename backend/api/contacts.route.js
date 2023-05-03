import express from "express"
import ContactsCtrl from "./contacts.controller.js"

const router = express.Router()

// router.route("/").get((req, res) => res.send("Hello World"))
router.route("/contact/:id").get(ContactsCtrl.apiGetContacts)
router.route("/new").post(ContactsCtrl.apiPostContacts)
router.route("/:id")
  .get(ContactsCtrl.apiGetContacts)
  .put(ContactsCtrl.apiUpdateContacts)
  .delete(ContactsCtrl.apiDeleteContacts)

export default router