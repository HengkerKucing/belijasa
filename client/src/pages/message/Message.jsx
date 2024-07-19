import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs"> <Link to="/messages" className='link'>PESAN</Link> > LUQMAN ALDI > </span>
        <div className="messages">
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti molestiae sunt commodi dolorum reiciendis, atque eveniet ullam id quasi libero labore. Neque veniam soluta harum similique veritatis, amet aliquid debitis!
            </p> 
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti molestiae sunt commodi dolorum reiciendis, atque eveniet ullam id quasi libero labore. Neque veniam soluta harum similique veritatis, amet aliquid debitis!
            </p> 
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti molestiae sunt commodi dolorum reiciendis, atque eveniet ullam id quasi libero labore. Neque veniam soluta harum similique veritatis, amet aliquid debitis!
            </p> 
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti molestiae sunt commodi dolorum reiciendis, atque eveniet ullam id quasi libero labore. Neque veniam soluta harum similique veritatis, amet aliquid debitis!
            </p> 
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti molestiae sunt commodi dolorum reiciendis, atque eveniet ullam id quasi libero labore. Neque veniam soluta harum similique veritatis, amet aliquid debitis!
            </p> 
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti molestiae sunt commodi dolorum reiciendis, atque eveniet ullam id quasi libero labore. Neque veniam soluta harum similique veritatis, amet aliquid debitis!
            </p> 
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" id="" placeholder='Tulis pesan' cols="30" rows="10"></textarea>
          <button>Kirim</button>
        </div>
      </div>
    </div>
  )
}

export default Message