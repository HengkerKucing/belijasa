import React from 'react'
import "./MyGigs.scss"
import { Link } from 'react-router-dom'

const MyGigs = () => {
  return (
    <div className='myGigs'>
      <div className="container">
        <div className="title">
          <h2>Jasa</h2>
          <Link to="/add">
            <button>Tambah Jasa Baru</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Gambar</th>
            <th>Judul</th>
            <th>Harga</th>
            <th>Penjualan</th>
            <th>Aksi</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Jasa1</td>
            <td>10000</td>
            <td>23</td>
            <td>
              <img className='delete' src="/img/delete.png" alt="" />
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
              <img className='delete' src="/img/delete.png" alt="" />
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
              <img className='delete' src="/img/delete.png" alt="" />
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
              <img className='delete' src="/img/delete.png" alt="" />
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
              <img className='delete' src="/img/delete.png" alt="" />
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
              <img className='delete' src="/img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs