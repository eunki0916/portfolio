import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./css/Contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lql4twf",
        "template_glriqqj",
        form.current,
        "i_4m0lCNFblWfulds"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact_wrap">
      <div className="me">
        <div>
          <p>👤이름 : 홍은기</p>
        </div>
        <div>
          <p>📧이메일 : ghddmsrl@gmail.com</p>
        </div>
        <div>
          <p>📱연락처 : 010-9674-0916</p>
        </div>
        <div>
          <p>🏠주거지 : 경기도 시흥</p>
        </div>
      </div>
      <div className="contactMe">
        <p>위 연락처 혹은 아래 메일을 통해 연락주세요!</p>
      </div>
      <div className="email_wrap">
        <form ref={form} onSubmit={sendEmail}>
          <div className="emailsend_wrap">
            <label className="">이름</label>
            <input type="text" name="user_name" />
            <label className="">이메일</label>
            <input type="email" name="user_email" />
          </div>
          <label>메세지</label>
          <textarea
            className="email_message"
            name="message"
            placeholder="메세지를 남겨주세요"
          />
          <input className="email_send" type="submit" value="보내기" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
