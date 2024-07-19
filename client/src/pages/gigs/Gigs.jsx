import React, { useState } from 'react'
import "./Gigs.scss"
import { gigs } from "../../data" 
import GigCard from './../../components/gigCard/GigCard';


const Gigs = () => {

  const[open, setOpen] = useState(false)
  const[sort, setSort] = useState("sales")

  const reSort = (type) =>{
    setSort(type)
    setOpen(false)
  }


  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadcrumbs">BELIJASA > SERVIS ></span>
        <h1>Servis Laptop</h1>
        <p>Temukan tukang servis terbaik pilihanmu sendiri</p>
        <div className="menu">
          <div className="left">
            <span>Harga</span>
            <input type="text" placeholder='min' />
            <input type="text" placeholder='maks' />
            <button>Terapkan</button>
          </div>
          <div className="right">
            <span className='sortBy'>Urutkan</span>
            <span className='sortType'>{sort === "sales" ? "Penjualan Terbaik" : "Terbaru"}</span>
            <img src="./img/down.png" alt="" onClick={()=>setOpen(!open)}/>
            {open && (<div className="rightMenu">
              {sort === "sales" ? (<span onClick={()=>reSort("createdAt")}>Terbaru</span>)
              : (<span onClick={()=>reSort("sales")}>Penjualan Terbaik</span>)}
            </div>)}
          </div>
        </div>
        <div className="cards">
          {gigs.map(gig=>(
            <GigCard key={gig.id} item={gig}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs