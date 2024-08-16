import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom"
import "./Navbar.scss"
import newRequest from '../../utils/newRequest'

const Navbar = () => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
    const {pathname} = useLocation()

    const isActive = ()=> {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(()=>{
        window.addEventListener("scroll", isActive)

        return ()=>{
            window.removeEventListener("scroll", isActive)
        }
    }, [])

    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await newRequest.post("/auth/logout")
            localStorage.setItem("currentUser", null)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }
  
    return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className='link'>
                <span className='text'>belijasa</span>
                </Link>
                <span className='dot'>.com</span>
            </div>
            <div className="links">
                <span>Temukan</span>
                {!currentUser?.isSeller && <span>Menjadi Penjual</span>}
                {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Jasa
                      </Link>
                      <Link className="link" to="/add">
                        Tambah Jasa
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Pesanan
                  </Link>
                  <Link className="link" to="/messages">
                    Pesan
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Keluar
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Masuk</Link>
              <Link className="link" to="/register">
                <button>Bergabung</button>
              </Link>
            </>
          )}
        </div>
      </div>

        {(active || pathname !=="/" ) && (
        <>
            <hr />
            <div className="menu">
            <Link className='link' to="/">Elektronik & Kelistrikan</Link>
            <Link className='link' to="/">Kepelatihan & Mengajar</Link>
            <Link className='link' to="gigs?cat=design">Design & Kreatif</Link>
            <Link className='link' to="/">Pembuatan Barang</Link>
            <Link className='link' to="/">Bersih-bersih</Link>
            <Link className='link' to="/">Pekerjaan Berat & Kasar</Link>
        </div>
        <hr />
        </>
        )}
    </div>
  )
}

export default Navbar