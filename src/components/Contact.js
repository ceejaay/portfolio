
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
  margin: 5px 5% 5px 10%;
  border: black solid 1px;
  width: 80%;
  &:hover {
    background: lightgray;
  }
`

const ContactText = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 75px;
    width: 95%;
    font-size: 3em;
    margin-left: 5%;
    padding-right: 3%;
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5em;
  width: 10%;
  padding-left: 3%;
`

const ExLink = styled.a`
  color: black;

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
            <ExLink href="https://github.com/ceejaay">Github Profile</ExLink>
          </ContactText>
        </DataBox>

        <DataBox>
          <Icon>
            <FaLinkedin/>
          </Icon>
          <ContactText>
            <ExLink href="https://www.linkedin.com/in/chad-jemmett-a3a0a347/">LinkedIn Profile</ExLink>
          </ContactText>
        </DataBox>
      </ContactContainer>
      )

  }


export default Contact;
