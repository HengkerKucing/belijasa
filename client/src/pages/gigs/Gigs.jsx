import React, { useEffect, useRef, useState } from 'react'
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

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      newRequest.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then((res)=>{
        return res.data
      })
  })


  const reSort = (type) =>{
      setSort(type)
      setOpen(false)
    }

    useEffect(() => {
      refetch()
    }, [sort])


    const apply = () => {
      refetch();
    };

  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadcrumbs">BELIJASA {'>'} SERVIS {'>'} </span>
        <h1>Servis Laptop</h1>
        <p>Temukan tukang servis terbaik pilihanmu sendiri</p>
        <div className="menu">
          <div className="left">
            <span>Harga</span>
            <input ref={minRef} type='number' placeholder='min' />
            <input ref={maxRef} type='number' placeholder='maks' />
            <button onClick={apply}>Terapkan</button>
          </div>
          <div className="right">
            <span className='sortBy'>Urutkan</span>
            <span className='sortType'>{sort === "sales" ? "Termurah" : "Terbaru"}</span>
            <img src="./img/down.png" alt="" onClick={()=>setOpen(!open)}/>
            {open && (<div className="rightMenu">
              {sort === "sales" ? (
                <span onClick={()=>reSort("createdAt")}>Terbaru</span>
              ) : (
                <span onClick={()=>reSort("sales")}>Termurah</span>
              ) }
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