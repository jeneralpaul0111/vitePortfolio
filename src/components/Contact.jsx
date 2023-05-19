import axios from "axios";
import React from "react";
import { useEffect } from "react";

//const APILINK = "http://localhost:5000/api/v1/contacts/";

const Contact = () => {
  const fetchNotes = async () => {
    const data = await axios.get(
      "http://localhost:5000/api/v1/contacts/contact/6452987e16b531880424a2f7"
    );
    //const data = await axios.post("/api/v1/contacts/new");
    console.log(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="bg-emerald-50">
      <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
          Contact
        </h1>
        <p className="pb-4 italic text-center text-[#001b5e]">
          How can I help you?
        </p>
        <form
          //action="https://getform.io/f/d3a09203-0c41-4a20-a5bb-8cb98c43323c"
          //action="http://localhost:5000/api/v1/contacts/new"
          action="
          @{
            useEffect();
          }
          "
          method="POST"
          encType="multipart/form-data"
        >
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Name</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Phone</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="phone"
                id="phone"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Email</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Subject</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="subject"
                id="subject"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Message</label>
              <textarea
                className="border-2 rounded-lg p-3 border-gray-300"
                rows="10"
                name="message"
                id="message"
              ></textarea>
            </div>
          </div>
          <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
