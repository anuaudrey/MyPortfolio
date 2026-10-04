/*
 * Author: Audrey Anulegeh
 * lastly modified: 3 October 2026
 *
 * Description:
 * This is a static form that allows users to submit their contact information and a message. 
 * Upon submission, the user is redirected to the home page.
 */
import { useNavigate } from "react-router-dom";
import Button from "./Button";
function ContactForm() {

   const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // this helps redirect to the Home page after submitting the form
    navigate("/");
  }
  return (
    <form onSubmit={handleSubmit} >
      <div className="grid gap-5 sm:grid-cols-2 flex">
        <div className="flex flex-col gap-2 ">
          <label>First name</label>
          <input type="text" name="firstName" required className="w-full rounded-2xl border border-pink-100 bg-white/70 mr-4 py-3 mb-4 outline-none " />
        </div>
        <div className="flex flex-col gap-2">
          <label>Last name</label>
          <input type="text" name="lastName" required className="w-full rounded-2xl border border-pink-100 bg-white/70 mr-4 py-3 px-4 mb-4 outline-none " />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label>Contact</label>
        <input type="contact" name="contact" required className="w-full rounded-2xl border border-pink-100 bg-white/70 mr-4 py-3 px-4 mb-4 outline-none " />
      </div>
      <div className="flex flex-col gap-2">
        <label>Email address</label>
        <input type="email" name="email" required className="w-full rounded-2xl border border-pink-100 bg-white/70 mr-4 py-3 px-4 mb-4 outline-none " />
      </div>
      <div className="flex flex-col gap-2">
        <label>Message</label>
        <textarea type="text" name="message" required className="w-full rounded-2xl border border-pink-100 bg-white/70 mr-4 py-3 px-4 mb-4 outline-none h-32 " />
      </div>
      <Button type="submit">
        Send Message
      </Button>
    </form>
  );
}

export default ContactForm;