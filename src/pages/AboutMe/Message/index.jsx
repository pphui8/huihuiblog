import React, { useState, useEffect } from 'react'
import { BsFillMarkdownFill } from 'react-icons/bs'
import { VscOpenPreview } from "react-icons/vsc";
import ReactMarkdown from 'react-markdown'
import '../../../github-markdown-dark.css'
import '../../../github-markdown-light.css'
import './index.css'

function Msg(props) {
  const msg = props.msg;
  const isNight = props.isNight;
  const toUrl = () => {
    if(msg.url === "none") {
      return;
    }
    window.open(msg.url, '_blank');
  }
  return (
    <div className="msg">
      <div className="msgTitle" onClick={toUrl}>{msg.username + ':'}</div>
      <div className={isNight ? 'msgArticle markdown-body-night' : 'msgArticle markdown-body'}>
        <ReactMarkdown children={msg.value}></ReactMarkdown>
      </div>
      <div className="timeTag">{msg.time}</div>
    </div>
  )
}

export default function Message(props) {
  const isNight = props.isNight;
  const [message, setMessage] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [comments, setComments] = useState([]);
  const toMdDoc = () => {
    window.location.href = 'https://www.markdownguide.org/';
  }
  const mdPreview = () => {
    let inputMsg = document.querySelector('#userMessage').value;
    if(showPreview === true) {
      setShowPreview(false);
      return;
    }
    if(inputMsg !== '') {
      setShowPreview(true);
      setMessage(inputMsg);
    } else {
      setShowPreview(false);
    }
  }
  const getComment = () => {
    fetch(`https://api.pphui8.me/comment`)
      .then(res => res.json())
      .then(res => {
        res.sort((a, b) => b.id - a.id);
        setComments(res);
      })
      .catch(err => console.log('Request Failed', err));
  }

  useEffect(() => {
      getComment();
  }, []);

  const submmit = () => {
    let inputUsername = document.querySelector('#inputUsername').value;
    let inputUrl = document.querySelector('#inputUrl').value;
    let inputMsg = document.querySelector('#userMessage').value;
    if(inputUsername === '') {
      alert('please input your username');
      return;
    }
    if(inputMsg === '') {
      alert('please input your message');
      return;
    }
    if(inputUrl === '') {
      inputUrl = 'none';
    }
    fetch(`https://api.pphui8.me/addcomment`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        username: inputUsername.trim(),
        url: inputUrl.trim(),
        value: inputMsg.trim(),
        token: 'pphui8',
        time: new Date().toLocaleString().split(' ')[0],
      })
    }).then(_ => {
      document.querySelector('#inputUsername').value = '';
      document.querySelector('#inputUrl').value = '';
      document.querySelector('#userMessage').value = '';
    }).catch(err => console.log('Request Failed', err));
  }

  return (
    <div className={isNight ? 'messageContainer messageContainerNight' : 'messageContainer'}>
      {/* <h4 className='messageTitle'></h4> */}
      <div className='editContainer'>
        <div className="user">
            <input type="text" placeholder='nickname' id="inputUsername"/>
            <input type="text" placeholder='url (option)' id="inputUrl"/>
        </div>
        <textarea maxLength="256" placeholder='leave a message' id='userMessage'></textarea>
        <span className="previewBtn" onClick={mdPreview}><VscOpenPreview/></span>
        <div className='messageBottom'>
          <div className="mdIcon" onClick={toMdDoc}><BsFillMarkdownFill /></div>
          <div className="submit" id='submit' onClick={submmit}>submit</div>
        </div>
      </div>
      {
        showPreview?(
          <div className={isNight ? 'preview markdown-body-night' : 'preview markdown-body'}>
            <ReactMarkdown children={message}></ReactMarkdown>
          </div>
        ):null
      }
      <div className="publshedMsg">
      {
        comments.map((item, index) => {
          return (
            <Msg key={index} msg={item} isNight={isNight}></Msg>
          )
        })
      }
      </div>
    </div>
  )
}
