import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import image1 from '../assets/avatar-1.png'
import image2 from '../assets/avatar-2.png'
import image3 from '../assets/avatar-3.png'
import image4 from '../assets/avatar-4.png'
import image5 from '../assets/icon-design.svg'
import image6 from '../assets/icon-dev.svg'
import image7 from '../assets/icon-app.svg'
import image8 from '../assets/icon-photo.svg'
import image9 from '../assets/photo-output (1).png'
import image10 from '../assets/favicon.png'
import image11 from '../assets/R (1).png'
import image12 from '../assets/IMG_3885.png'
import image13 from '../assets/OH7Yxoy.png'
import image14 from '../assets/R.png'




const testimonialsData = [
  // Add your testimonials data here, for example:
  {
    avatarSrc: image1,
    avatarAlt: "EBIZCO",
    title: "EBIZCO",
    text: "Saffi was hired as a junior developer in our team and he has always worked and learned with motivation and dedication . We were very pleased with the work done. He has a gained lot of experience and is very concerned about the needs of client.",
  },
  {
    avatarSrc: image2,
    avatarAlt: "AR properties",
    title: "AR properties",
    text: "we wanted a website for our company and someone refer saffi to us and when we worked with him he left us amazed with his work especially the time in which he delivered.He truly is dedicated to his work. "
  },
  {
    avatarSrc: image3,
    avatarAlt: "GRB builders",
    title: "GRB builders",
    text: "Saffi is an exceptional web developer who delivered a flawless website ahead of schedule. Their expertise, attention to detail, and clear communication made the entire process smooth and enjoyable."
  },
  {
    avatarSrc: image4,
    avatarAlt: "StellarShopper",
    title: "StellarShopper",
    text: "Saffi transformed our e-commerce site, TrendyTreasures, into a sleek and high-performing platform. Their expertise and prompt delivery exceeded our expectations! "
  },

];


const About = () => {

  const [modalActive, setModalActive] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState({});

  const openModal = (testimonial) => {
    setCurrentTestimonial(testimonial);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
    setCurrentTestimonial({});
  };

  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
        I'm creative web developer and UI/UX Designer from Lalamusa, Pakistan, working in web development.
        I enjoy
        turning complex problems into simple, beautiful and intuitive designs.
      </p>

      <p>
        My job is to build your website so that it is functional and user-friendly but at the same time attractive.
        Moreover, I
        add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
        across your
        message and identity in the most creative way. I created web design for few famous brand companies.
      </p>
    </section>



    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

        <li className="service-item">

          <div className="service-icon-box">
            <img src={image5} alt="design icon" width="40"/>
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Web design</h4>

            <p className="service-item-text">
              The most modern and high-quality design made at a professional level.
            </p>
          </div>

        </li>

        <li className="service-item">

          <div className="service-icon-box">
            <img src={image6} alt="Web development icon" width="40"/>
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Web development</h4>

            <p className="service-item-text">
              High-quality development of sites at the professional level.
            </p>
          </div>

        </li>

        <li className="service-item">

          <div className="service-icon-box">
            <img src={image7} alt="mobile app icon" width="40"/>
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Responsive Designs</h4>

            <p className="service-item-text">
              Professional development of websites for all devices.
            </p>
          </div>

        </li>

        <li className="service-item">

          <div className="service-icon-box">
            <img src={image8} alt="camera icon" width="40"/>
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Photography</h4>

            <p className="service-item-text">
              I make high-quality photos of any category at a professional level.
            </p>
          </div>

        </li>

      </ul>

    </section>




  
    <div className='testimonials'>
    <h3 className="h3 testimonials-title">Testimonials</h3>
      <ul className="testimonials-container testimonials-list has-scrollbar">
        {testimonialsData.map((testimonial, index) => (
          <li
            key={index}
            className="testimonial-item testimonials-item"
            onClick={() => openModal(testimonial)}
          >
            <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
            <img
              src={testimonial.avatarSrc}
              alt={testimonial.avatarAlt}
              data-testimonials-avatar
            />
            </figure>

            <h4 className="h4 testimonials-item-title" data-testimonials-title>{testimonial.title}</h4>
            <div className="testimonials-text" data-testimonials-text>
            <p >{testimonial.text}</p>
            </div>
            </div>
          </li>
        ))}
      </ul>

      {modalActive && (
        <>
          <div className="modal-container active" data-modal-container>
          <div className="overlay active" data-overlay onClick={closeModal}></div>
          <section className="testimonials-modal">

            <button
              className="modal-close-btn"
              data-modal-close-btn
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
            <img
              src={currentTestimonial.avatarSrc}
              alt={currentTestimonial.avatarAlt}
              width="80"
              data-modal-img
            />
            </figure>
            <img
             src="src\assets\icon-quote.svg" 
             alt="" 
             />
            </div>
            <div className='modal-content'>
            <h4 className="h3 modal-title" data-modal-title>{currentTestimonial.title}</h4>
            <time dateTime="2021-06-14">14 June, 2021</time>
            <div data-modal-text>
            <p >{currentTestimonial.text}</p>
            </div>
            </div>
            </section>
          </div>

        </>
      )}
    </div>
  




    <section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src={image9} alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src={image10} alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src={image11} alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src={image12} alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src={image13} alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src={image14} alt="client logo"/>
          </a>
        </li>

      </ul>

    </section>

  </article>
  )
}

export default About