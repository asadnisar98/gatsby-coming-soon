import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components';
import { Container, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Mailchimp from 'react-mailchimp-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bg from "../images/bg.jpg"



const BgImage = styled.div`
height: 100%;
-webkit-background-size: cover;
background-size: cover;
background-position: center;
background-color: #fff2ef;
margin-left: -15px;
margin-right: -15px;
position: relative;
overflow: hidden;
background-image: url(${Bg});
@media (max-width: 766px) {
    height:350px;
  }
`
const RightContent = styled.div`
padding-top: 70px;
padding-bottom: 30px;
min-height: 100vh;
padding-right: 0px;
text-align: center !important;
`
const ComingTitle = styled.div`
position: relative;
margin-top: 10vh;
margin-bottom: 5vh;
`
const ComingText = styled.h3`
font-size: 30px;
color: #000000;
font-weight: 700;
display: inline-block;
background: #ffffff;
padding-left: 30px;
padding-right: 30px;
`
const ComingMeetText = styled.h1`
font-size: 120px;
font-weight: 900;
color: #181818;
line-height: 1;
margin-bottom: 35px;
}
`
const ComingPara = styled.p`
font-size: 17px;
font-weight: 500;
color: #000000;
line-height: 2;
`

const MyLink = styled(Link)`
height: 35px;
width: 35px;
line-height: 35px;
background-color: #000;
color: #fff;
border-radius: 50%;
display: block;
text-align: center;
font-size: 12px;
float: left;
margin-left:5px;

`

const IndexPage = () => (
  <Layout>

<Row>

<Col lg="6" md="6" >
<BgImage></BgImage>

</Col>
<Col lg="6" md="6">
<RightContent>
<h1>AsadNisar.Com</h1>
<ComingTitle>

<ComingText>Coming Soon</ComingText>
<ComingMeetText>Nice To <br /> Meet <br /> You</ComingMeetText>
<ComingPara>We are preparing something amazing and exciting<br /> for you.
  <br />
Special surprise for our subscribers</ComingPara>

<Mailchimp
  action='https://<YOUR-USER>.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX'

  //Adding multiple fields:
  fields={[
    {
      name: 'EMAIL',
      placeholder: 'Email',
      type: 'email',
      required: true
    },
  ]}
  // Change predetermined language
  messages = {
    {
      sending: "Sending...",
      success: "Thank you for subscribing!",
      error: "An unexpected internal error has occurred.",
      empty: "You must write an e-mail.",
      duplicate: "Too many subscribe attempts for this email address",
      button: "Subscribe!"
    }
  }
  // Add a personalized class
  className='custom-form'
  />
  <div class="social-icon">

                                      <ul>
                                          <li class="title">Stay In Touch :</li>
                                          <li><MyLink to={`#`}><i><FontAwesomeIcon icon={faFacebookF} /></i></MyLink></li>
                                            <li><MyLink to={`#`}><FontAwesomeIcon icon={faTwitter} /></MyLink></li>
                                            <li><MyLink to={`#`}><FontAwesomeIcon icon={faInstagram} /></MyLink></li>
                                            <li><MyLink to={`#`}><FontAwesomeIcon icon={faYoutube} /></MyLink></li>
                                      </ul>
                                  </div>
</ComingTitle>
</RightContent>
</Col>

</Row>

  </Layout>
)

export default IndexPage
