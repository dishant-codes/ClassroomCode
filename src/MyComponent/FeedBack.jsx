import React from "react";
import "./FeedBack.css";
import emailjs from "emailjs-com";

function FeedBack() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4g5i40q",
        "template_nx0sznl",
        e.target,
        "user_a5dCd5aeoMXSEYOh6d9FD"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank You!!!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    // alert("Thank You!!!");
    e.target.reset();
  }

  return (
    <div className="feedback container">
      <h2>FeedBack Form</h2>
      <form className="row feedback-form g-3" onSubmit={sendEmail}>
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            name="name"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefault02" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            name="subject"
            id="validationDefault02"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefaultUsername" className="form-label">
            Email
          </label>
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
          <div className="invalid-feedback">Please enter valid email.</div>
        </div>

        <div className="col-md-8">
          {" "}
          <label htmlFor="validationTextarea" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="validationTextarea"
            name="message"
            placeholder="Required example textarea"
            rows="4"
            required
          ></textarea>
          <div className="invalid-feedback">Please enter a message here.</div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FeedBack;
