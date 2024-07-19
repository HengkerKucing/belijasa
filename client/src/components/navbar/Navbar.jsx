import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import "./Navbar.scss"

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

    const currentUser = {
        id:1,
        username:"Aldibek",
        isSeller:true
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
                <span>BeliJasa Bisnis</span>
                <span>Temukan</span>
                <span>English</span>
                <span>Masuk</span>
                {!currentUser?.isSeller && <span>Menjadi Penjual</span>}
                {!currentUser && <button>Bergabung</button>}
                {currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="https://i.pinimg.com/564x/df/f2/e5/dff2e51ba3eafe2f231e04c4134f7656.jpg" alt="" />
                        <span>{currentUser?.username}</span>
                        {open && <div className="options">
                            {
                                currentUser?.isSeller && (
                                    <>
                                    <Link className='link' to="/mygigs">Jasa</Link>
                                    <Link className='link' to="/add">Tambah Jasa </Link>
                                    </>
                                )}
                                <Link className='link' to="/orders">Pesanan</Link>
                                <Link className='link' to="/messages">Pesan</Link>
                                <Link className='link'>Keluar</Link>
                        </div>}
                    </div>
                )}
            </div>    
        </div>

        {(active || pathname !=="/" ) && (
        <>
            <hr />
            <div className="menu">
            <Link className='link' to="/">Elektronik & Kelistrikan</Link>
            <Link className='link' to="/">Kepelatihan & Mengajar</Link>
            <Link className='link' to="/">Pijat & Pegal</Link>
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