import React from 'react'
import { Link } from 'react-router-dom'
import CountUp from "react-countup";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
function Home() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 2000,
    infinite: false,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <>
      <section className='hero pt-4 bglight'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-8'>
              <h1>
                Advance Your Career
                <span> Become a registered tax preparer</span>
              </h1>
              <Link to='/' className="btn mt-3">Get Started Now</Link>
            </div>
            <div className='col hero-img'>
              <img src={require('../images/hero-img.png')} />
            </div>
          </div>
        </div>
      </section>

      <section className='our-qualifying py-5 position-relative cover' style={{ backgroundImage: 'url(' + require('../images/bg-banner-01.jpg') + ')' }}>
        <div className='container position-relative'>
          <div className='row'>
            <div className='col-md-4 counter-box'>
              <div className='work counter-tx mb-3'>
                <CountUp start={0} end={1000} duration={5} />
                <span>+</span>
              </div>
              <p className='inter'>Successful students</p>
            </div>
            <div className='col-md-4 counter-box'>
              <div className='work counter-tx mb-3'>
                <CountUp start={0} end={15} duration={5} />
                <span>+</span>
              </div>
              <p className='inter'>Years of experience in professional education</p>
            </div>
            <div className='col-md-4 counter-box'>
              <div className='work counter-tx mb-3'>
                <CountUp start={0} end={60} duration={5} />
                <span>+</span>
              </div>
              <p className='inter'>Hours of self-study material</p>
            </div>
          </div>
        </div>
      </section>

      <section className='business-step ptb-160'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 d-flex'>
              <div className='business-step-box'>
                <img src={require('../images/check-img.png')} />
                <h4>Advance your career.</h4>
                <p>Complete the required coursework and get licensed in just a few weeks.</p>
              </div>
            </div>
            <div className='col-md-4 d-flex'>
              <div className='business-step-box'>
                <img src={require('../images/plan-img.png')} />
                <h4>Launch a new business.</h4>
                <p>Work for a few hours a week or grow into a full-service tax practice</p>
              </div>
            </div>
            <div className='col-md-4 d-flex'>
              <div className='business-step-box'>
                <img src={require('../images/grow-img.png')} />
                <h4>Boost your earnings.</h4>
                <p>Choose to earn extra cash during tax seasons or make it your main source of income</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='testimonial pb-160'>
        <div className='container'>
          <h2 className='text-capitalize text-center mb-5'>what our <span className='text-blue'>students are saying</span></h2>
          <Slider {...settings}>
            <div class="slide-item">
              <div class="slide-img d-flex align-items-center">
                <div class="testi-img pr-3">
                  <img className='rounded-circle' src={require('../images/arman.jpg')} />
                </div>
                <div class="testi-info">
                  <h6 className='mb-0 font-weight-bold'>Arman</h6>
                  <span className='form-control-sm p-0'>Sunnyvale, CA</span>
                </div>
              </div>
              <div class="slide-content pt-3">
                <h5 className='font-weight-bold mb-3'>Excellent Course</h5>
                <p className='mb-0'>As someone with minimal prior knowledge of tax laws, enrolling in this tax course was a game-changer for me. This course truly lives up to its name, providing an in-depth exploration of taxation that is both comprehensive and accessible.</p>
              </div>
            </div>
            <div class="slide-item">
              <div class="slide-img d-flex align-items-center">
                <div class="testi-img pr-3">
                  <img className='rounded-circle' src={require('../images/elezabeth.jpg')} />
                </div>
                <div class="testi-info">
                  <h6 className='mb-0 font-weight-bold'>Elezabeth</h6>
                  <span className='form-control-sm p-0'>Bakersfield, CA</span>
                </div>
              </div>
              <div class="slide-content pt-3">
                <h5 className='font-weight-bold mb-3'>Excellent Course</h5>
                <p className='mb-0'>As someone with minimal prior knowledge of tax laws, enrolling in this tax course was a game-changer for me. This course truly lives up to its name, providing an in-depth exploration of taxation that is both comprehensive and accessible.</p>
              </div>
            </div>
            <div class="slide-item">
              <div class="slide-img d-flex align-items-center">
                <div class="testi-img pr-3">
                  <img className='rounded-circle' src={require('../images/alex.jpg')} />
                </div>
                <div class="testi-info">
                  <h6 className='mb-0 font-weight-bold'>Alex</h6>
                  <span className='form-control-sm p-0'>Tax Consultant, ABC Inc.</span>
                </div>
              </div>
              <div class="slide-content pt-3">
                <h5 className='font-weight-bold mb-3'>Excellent Course</h5>
                <p className='mb-0'>As someone with minimal prior knowledge of tax laws, enrolling in this tax course was a game-changer for me. This course truly lives up to its name, providing an in-depth exploration of taxation that is both comprehensive and accessible.</p>
              </div>
            </div>

          </Slider>
        </div>
      </section>

      <section className='our-qualifying text-center p-tb position-relative cover' style={{ backgroundImage: 'url(' + require('../images/bg-banner-01.jpg') + ')' }}>
        <div className='container position-relative'>
          <h2>Enroll in Our Qualifying Education Course</h2>
          <h3>Become A Registered Tax Preparer</h3>
          <Link to='/' className="btn mt-5">Get Started Now</Link>
        </div>
      </section>
    </>
  )
}

export default Home
