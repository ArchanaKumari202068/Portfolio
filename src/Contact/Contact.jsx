import React,{useState} from "react";
import "./Contact.css";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="conatiner" id="Contact_conatiner">
        <div className="contact_details">
          <div className="contact_infor">
            <LocalPhoneOutlinedIcon className="Contact_icons"/>
            <div>
              <h3> Call me</h3>
              <span>7870840943</span>
            </div>
          </div>
          <div className="contact_infor">
            <EmailOutlinedIcon  className="Contact_icons"/>
            <div>
              <h3>Email me</h3>
              <span>archanakumari202068@gmail.com</span>
            </div>
          </div>
          <div className="contact_infor">
            <PlaceOutlinedIcon  className="Contact_icons"/>
            <div>
              <h3> Call me</h3>
              <span>location</span>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit"> Send Message <SendOutlinedIcon/> </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
