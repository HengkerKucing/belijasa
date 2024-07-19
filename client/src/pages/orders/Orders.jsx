import React from 'react'
import "./Orders.scss"
import { Link } from 'react-router-dom'

const Orders = () => {

const currentUser = {
    id:1,
    username:"Aldibek",
    isSeller:true
}

  return (
    <div className='orders'>
      <div className="container">
        <div className="title">
          <h2>Pesanan</h2>
        </div>
        <table>
          <tr>
            <th>Gambar</th>
            <th>Judul</th>
            <th>Harga</th>
            <th>{currentUser?.isSeller ? "Pembeli" : "Penjual"}</th>
            <th>Hubungi</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Jasa1</td>
            <td>10000</td>
            <td>23</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Jasa1</td>
            <td>10000</td>
            <td>23</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Jasa1</td>
            <td>10000</td>
            <td>23</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Jasa1</td>
            <td>10000</td>
            <td>23</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Jasa1</td>
            <td>10000</td>
            <td>23</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Jasa1</td>
            <td>10000</td>
            <td>23</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders