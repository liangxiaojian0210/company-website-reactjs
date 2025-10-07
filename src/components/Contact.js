function Contact() {
  return (
    <div className="container contact">
      <h2 className="main-title text-center">联系方式</h2>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4 mb-1">
            <input name="name" placeholder="姓名" className="contact-input" />
          </div>

          <div className="col-md-4 mb-1">
            <input name="email" placeholder="邮箱" className="contact-input" />
          </div>
          <div className="col-md-4 mb-1">
            <input
              name="subject"
              placeholder="主题"
              className="contact-input"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="col-md-12">
      <textarea
            name="message"
            placeholder="内容"
            className="contact-textarea"
          />
      </div>

      <br></br>
      <div className="row">
        <div className="col-md-12">
          <input className="form-btn" type="submit" value="提交" />
        </div>
      </div>
    </div>
  );
}
export default Contact;
