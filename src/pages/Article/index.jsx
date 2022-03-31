import React, { useEffect, useState } from 'react'
import { useLocation  } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { Buffer } from 'buffer';
import { AiFillFile, AiOutlineFolder } from 'react-icons/ai'
import { nanoid } from 'nanoid'
import '../../github-markdown-dark.css'
import '../../github-markdown-light.css'
import './index.css'
import './night.css'

let cur_index = [];
let cur_file = [];
let cur_url = null;
let pre_url = null;

export default function Article(props) {
  const root = `api.pphui8.me`;
  const title = useLocation().state.title;
  const [blogRoot, setBlogRoot] = useState("");
  const [article, setArticle] = useState("Loading...");
  const isNight = props.isNight;

  // 通过项目名获取项目文件树
  const getBlogIndex = () => {
    // 获取跟目录名
    fetch(`https://` + root + `/blog/` + title, {
        method: `GET`,
        mode: `cors`,
    })
      .then(response => response.json())
      .then(res => {
        let blogRoot = res.blog_root.replace("\"","").replace("\"","");
        setBlogRoot(blogRoot);
        return blogRoot;
      })
      .then((blogRoot) => {
        cur_url = `https://api.github.com/repos/pphui8/` + blogRoot + `/git/trees/main`;
        // 获取目录
        fetch(cur_url)
          .then(response => response.json())
          .then(res => {
            deal_index(res);
            return res;
          })
          .catch(err => console.log('Request Failed', err));
      })
      .catch(err => console.log('Request Failed', err))
  }

  useEffect(async () => {
    getBlogIndex();
  }, [])

  // 处理项目文件树
  let cur_root;
  const deal_index = (blogIndex) => {
    if(cur_index.length === 0) {
      cur_index.push({
        "name": "..",
        "url": null
      });
    }
    if(cur_root === null) {
      cur_root = title;
    }
    if(blogIndex.tree === undefined) {
      return;
    }
    for(let index of blogIndex.tree) {
      // 是目录
      if(index.mode === "040000") {
        let is_f = false;
        for(let cur of cur_index) {
          if(cur.name === index.path) {
            is_f = true;
            break;
          }
        }
        if(!is_f) cur_index.push({
          "name": index.path,
          "url": index.url,
          "encoding": index.encoding
        });
      } else {  // 是文件
        let is_f = false;
        for(let cur of cur_file) {
          if(cur.name === index.path) {
            is_f = true;
            break;
          }
        }
        if(!is_f) cur_file.push({
          "name": index.path,
          "url": index.url,
          "encoding": index.encoding
        });
      }
      // 自动展示一个页面(优先README.md)
      if(cur_file.length != 0) {
        let has_rm = false;
        for(let cur of cur_file) {
          if(cur.name === "README.md") {
            showFile(cur.url);
            has_rm = true;
            break;
          }
        }
        if(!has_rm) showFile(cur_file[0].url);
      }
    }
    // 重新渲染组件
    setBlogRoot(blogRoot);
  }

  function toPath(url) {
    // 回退
    if(url === null) {
      if(pre_url != null) {
        toPath(pre_url);
        pre_url = null;
      } else {
        alert("you are already at the root of this blog");
      }
      return;
    }
    setArticle("Loading...")
    cur_index = [];
    cur_file = [];
    pre_url = cur_url;
    // 获取目录
    fetch(url)
    .then(response => response.json())
    .then(res => {
      deal_index(res);
      return res;
    })
    .catch(err => console.log('Request Failed', err));
  }

  function showFile(url) {
    setArticle("Loading...");
    fetch(url)
      .then(response => response.json())
      .then(article => {
        setArticle(new Buffer.from(article.content,  article.encoding).toString())
      })
      .catch(err => console.log('Request Failed', err));
  }

  return (
    <div className='article'>
      <div className="container">
        <ul className={isNight ? `index_night` : `index`} id="blogTreeContainer">
          {
            cur_index.map((value) => {
              return <li key={nanoid()} onClick={()=>toPath(value.url)}><AiOutlineFolder/>{value.name}</li>
            })
          }
          {
            cur_file.map((value) => {
              return <li key={nanoid()} onClick={()=>showFile(value.url)}><AiFillFile/>{value.name}</li>
            })
          }
        </ul>
        <div className={isNight ? 'article markdown-body-dark' : 'article markdown-body'}>
          <ReactMarkdown children={article}></ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
