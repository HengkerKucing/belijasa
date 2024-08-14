import React, { useRef, useState } from 'react'
import "./Gigs.scss"
import GigCard from './../../components/gigCard/GigCard'
import { useQuery } from "@tanstack/react-query"
import newRequest from '../../utils/newRequest'
import { useLocation } from 'react-router-dom'

const Gigs = () => {
  const[open, setOpen] = useState(false)
  const[sort, setSort] = useState("sales")
  const minRef = useRef()
  const maxRef = useRef()

  const {search}= useLocation()

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      newRequest.get(`/gigs${search}`).then(res=>{
        return res.data
      })
  })

  console.log(data)


  const reSort = (type) =>{
      setSort(type)
      setOpen(false)
    }


    const apply = () => {
      refetch();
    };

  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadcrumbs">BELIJASA > SERVIS > </span>
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
          {isLoading? "loading" : error ? "Something went wrong" : data.map(gig=>(
            <GigCard key={gig._id} item={gig}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs