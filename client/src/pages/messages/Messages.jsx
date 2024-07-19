import React from 'react'
import "./Messages.scss"
import { Link } from 'react-router-dom'

const Messages = () => {

const currentUser = {
    id:1,
    username:"Aldibek",
    isSeller:true
}

const message = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe impedit porro officiis. Et culpa eligendi impedit perferendis. Quia numquam nisi excepturi accusamus quo, sapiente, est dolore voluptatibus laudantium neque distinctio!` 

  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h2>Pesan</h2>
        </div>
        <table>
          <tr>
            <th>Pembelil</th>
            <th>Pesan Terakhir</th>
            <th>Waktu</th>
            <th>Aksi</th>
          </tr>
          <tr className='active'>
            <td>
              Luqman Aldi
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 hari yang lalu</td>
            <td>
              <button>Tandai telah Dibaca</button>
            </td>
          </tr>
          <tr className='active'>
            <td>
              Luqman Aldi
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 hari yang lalu</td>
            <td>
              <button>Tandai telah Dibaca</button>
            </td>
          </tr>
          <tr>
            <td>
              Luqman Aldi
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 hari yang lalu</td>
          </tr>
          <tr>
            <td>
              Luqman Aldi
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 hari yang lalu</td>
          </tr>
          <tr>
            <td>
              Luqman Aldi
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 hari yang lalu</td>
          </tr>
          <tr>
            <td>
              Luqman Aldi
            </td>
            <td><Link to="/message/123" className='link'>{message.substring(0,100)}...</Link></td>
            <td>1 hari yang lalu</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages