import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUs.css";
import { useFormik } from "formik";
import * as yup from "yup";

function ContactUs() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(null);

  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.fullname) {
  //     errors.fullname = "Required";
  //   } else if (values.fullname.length < 3 || values.fullname.length > 30) {
  //     errors.fullname = "please enter your name in range from 3 to 30";
  //   }

  //   if (!values.email) {
  //     errors.email = "Required";
  //   }
  //   //  else if (
  //   //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2-4}$/i.test(values.email)
  //   // ) {
  //   //   errors.email = "Invalid email address";
  //   // }

  //   if (!values.country) {
  //     errors.country = "Required";
  //   }

  //   if (!values.phone) {
  //     errors.phone = "Required";
  //   } else if (values.phone.length !== 10) {
  //     errors.phone = "Please enter a valid 10 digit Number";
  //   }

  //   if (!values.platform) {
  //     errors.platform = "Required";
  //   }

  //   if (values.checkbx1 === false) {
  //     errors.checkbx1 = "Please Tick this checbox";
  //   }
  //   return errors;
  // };

  const formschema = yup.object({
    fullname: yup
      .string()
      .required("Required")
      .max(30, "Limit is reached")
      .matches(/^[^0-9]*$/, "Please write a valid name"),
    email: yup.string().required("Required"),
    country: yup.string().required("Required"),
    phone: yup
      .string()
      .length(10, "Please enter 10 digit mobile number")
      .required("Required"),
    platform: yup.string().required("Required"),
    checkbx1: yup.boolean().oneOf([true], "Please Tick the checkbox"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      country: "",
      phone: "",
      platform: "",
      message: "",
      checkbx1: false,
      checkbx2: false,
    },
    validationSchema: formschema,
    onSubmit: async (values) => {
      console.log(values);
      // alert("hello ");
      setLoading(true);
      await SendData(values);
    },
  });

  const [formdata, setFormData] = useState({
    fullname: "",
    email: "",
    country: "",
    phone: "",
    platform: "",
    message: "",
    checkbx1: false,
    checkbx2: false,
  });

  // const HandleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevdata) => ({ ...prevdata, [name]: value }));
  // };

  // const HandleCheckboxChange = (event) => {
  //   const { name, checked } = event.target;
  //   setFormData((prevdata) => ({ ...prevdata, [name]: checked }));
  // };

  async function SendData(data) {
    // console.log(formdata);
    await fetch("https://api.sheetmonkey.io/form/odwXDZ3nQToiKCKiMfHCoH", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("form data subbmitted");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/thankyou", { replace: true });
  }

  return (
    <div className="contact_us_container">
      <div className="cont-div-banner">
        <img
          className="banner_img"
          src="https://successive.tech/wp-content/uploads/2021/05/ContactUs-2.png"
        />
        <div className="bluebox">
          <h6></h6>
          <h1>We'd love to help you start exceeding your business goals</h1>
        </div>
      </div>
      <section className="form-query-section">
        <div className="form-main-div">
          <div className="form-heading">
            <h3></h3>
            <h6>Drop Us a line</h6>
          </div>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className="forms-data-div">
                <label className="required_dot" for="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="fullname"
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Your Full Name"
                  className="input-style"
                />
                {formik.touched.fullname && formik.errors.fullname ? (
                  <span id="error-style">{formik.errors.fullname}</span>
                ) : null}
              </div>
              <div className="forms-data-div">
                <label for="email" className="required_dot">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Your Email address"
                  className="input-style"
                />
                {formik.touched.email && formik.errors.email ? (
                  <span id="error-style">{formik.errors.email}</span>
                ) : null}
              </div>
              <div className="forms-data-div">
                <label for="country" className="required_dot">
                  Country
                </label>
                <select
                  id="country-select"
                  name="country"
                  className="input-style"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled>
                    Please Select Country
                  </option>
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="japan">Japan</option>
                  <option value="bhutan">Bhutan</option>
                  <option value="indonesia">Indonesia</option>
                  <option value="china">China</option>
                  <option value="russia">Russia</option>
                  <option value="california">california</option>
                  <option value="LA">LA</option>
                </select>
                {formik.touched.country && formik.errors.country ? (
                  <span id="error-style">{formik.errors.country}</span>
                ) : null}
              </div>
              <div className="forms-data-div">
                <label for="phone" className="required_dot">
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  className="input-style"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <span id="error-style">{formik.errors.phone}</span>
                ) : null}
              </div>
              <div className="forms-data-div">
                <label for="platform" className="required_dot">
                  How did you discover this
                </label>
                <select
                  id="platform-select"
                  name="platform"
                  className="input-style"
                  value={formik.values.platfrom}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled>
                    Please Select
                  </option>
                  <option value="linkedin">Linkedin</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Search Engine">Search Engine</option>
                </select>
                {formik.touched.platform && formik.errors.platform ? (
                  <span id="error-style">{formik.errors.platform}</span>
                ) : null}
              </div>
              <div className="forms-data-div">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Please specify your requirement"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                ></textarea>
              </div>
              <div className="checkbox_container">
                <div className="forms-data-div-checkbox">
                  <input
                    id="checkbx1"
                    type="checkbox"
                    name="checkbx1"
                    checked={formik.values.checkox1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label for="checkbox1" className="required_dot">
                    By submitting this form, I agree to the terms mentioned in
                    the Privacy Policy{" "}
                  </label>
                </div>
                {formik.touched.checkbx1 && formik.errors.checkbx1 ? (
                  <span>{formik.errors.checkbx1}</span>
                ) : null}
              </div>
              <div className="checkbox_container">
                <div className="forms-data-div-checkbox">
                  <input
                    id="checkbox2"
                    type="checkbox"
                    name="checkbx2"
                    checked={formik.checkbx2}
                    onChange={formik.handleChange}
                  />
                  <label for="checkbox2">
                    I agree to receive the latest news, content & updates from
                    Successive Technologies (you may unsubscribe at any time)
                  </label>
                </div>
              </div>
              <button className="btn-style" type="submit" disabled={loading}>
                {loading ? "Submitting...." : "Submit"}
              </button>
            </form>
          </div>
        </div>
        <div className="details_main_div">
          <div className="details_heading">
            <h3></h3>
            <h6>We're Here To Help You</h6>
          </div>
          <div className="details_box_container">
            <div className="detail_box_div">
              <span className="details_icon">
                <img src="https://successive.tech/wp-content/uploads/2021/02/location.svg" />
              </span>
              <span className="details_txt">
                325 N Saint Paul St Suite 3100 PMB 2780 Dallas, TX 75201
              </span>
            </div>
            <div className="detail_box_div">
              <span className="details_icon">
                <img src="https://successive.tech/wp-content/uploads/2021/02/call.svg" />
              </span>
              <span className="details_txt">Call-us-on: +1-732-682-1404</span>
            </div>
            <div className="detail_box_div">
              <span className="details_icon">
                <img src="https://successive.tech/wp-content/uploads/2021/02/mail.svg" />
              </span>
              <span className="details_txt_email">
                <div>
                  <h7>For Business related queries:</h7>
                  <p>hello@xyz.com</p>
                </div>
                <div>
                  <h7>For Career related queries:</h7>
                  <p>career@xyz.com</p>
                </div>
                <div>
                  <h7>For HR related queries:</h7>
                  <p>hr@xyz.com</p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ContactUs;
