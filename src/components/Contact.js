
import React from 'react';
import { Link  } from 'react-router-dom';
import {FaLinkedin} from 'react-icons/fa';
import {GoMarkGithub} from 'react-icons/go';
import {MdEmail} from 'react-icons/md';
import {MdPhone} from 'react-icons/md';
import { goToTop } from 'react-scrollable-anchor';
import styled  from 'styled-components';

const ContactContainer = styled.div`
  margin-top: 65px;
  width: 50%;
`


const DataBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10%;
`

const ContactText = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 75px;
    width: 95%;
    font-size: 3em;
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5em;
  width: 10%;
`

function Contact() {
  return (
      <ContactContainer>
        <DataBox>
          <Icon>
            <MdPhone/>
          </Icon>
          <ContactText>
            <p>208-350-0359</p>
          </ContactText>
        </DataBox>
        <DataBox>
          <Icon>
            <MdEmail/>
          </Icon>
          <ContactText>
            <p>chad.jemmett@gmail.com</p>
          </ContactText>
        </DataBox>
        <DataBox>
          <Icon>
            <GoMarkGithub/>
          </Icon>
          <ContactText>
            <a href="https://github.com/ceejaay">Github Profile</a>
          </ContactText>
        </DataBox>

        <DataBox>
          <Icon>
            <FaLinkedin/>
          </Icon>
          <ContactText>
            <a href="https://www.linkedin.com/in/chad-jemmett-a3a0a347/">LinkedIn Profile</a>
          </ContactText>
        </DataBox>
      </ContactContainer>
      )

  }


export default Contact;
