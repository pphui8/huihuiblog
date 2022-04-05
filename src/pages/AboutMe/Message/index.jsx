import React, { useState } from 'react'
import { BsFillMarkdownFill } from 'react-icons/bs'
import { VscOpenPreview } from "react-icons/vsc";
import ReactMarkdown from 'react-markdown'
import '../../../github-markdown-dark.css'
import '../../../github-markdown-light.css'
import './index.css'

export default function Message(props) {
  const isNight = props.isNight;
  const [message, setMessage] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const toMdDoc = () => {
    window.location.href = 'https://www.markdownguide.org/';
  }
  const mdPreview = () => {
    let inputMsg = document.querySelector('#userMessage').value
    if(inputMsg !== '') {
      setShowPreview(true);
      setMessage(inputMsg);
    } else {
      setShowPreview(false);
    }
  }
  return (
    <div className={isNight ? 'messageContainer messageContainerNight' : 'messageContainer'}>
      {/* <h4 className='messageTitle'></h4> */}
      <div className='editContainer'>
        <div className="user">
            <input type="text" placeholder='nickname' />
            <input type="text" placeholder='mail (option)' />
            <input type="text" placeholder='url (option)' />
        </div>
        <textarea maxLength="256" placeholder='leave a message' id='userMessage'></textarea>
        <span className="previewBtn" onClick={mdPreview}><VscOpenPreview/></span>
        <div className='messageBottom'>
          <div className="mdIcon" onClick={toMdDoc}><BsFillMarkdownFill /></div>
          <div className="submit" id='submit'>submit</div>
        </div>
      </div>
      {
        showPreview?(
          <div className={isNight ? 'preview markdown-body-night' : 'preview markdown-body'}>
            <ReactMarkdown children={message}></ReactMarkdown>
          </div>
        ):null
      }
      <div className="messagesContainer">
        &nbsp;&nbsp;&nbsp;&nbsp;todo!
      </div>
    </div>
  )
}
