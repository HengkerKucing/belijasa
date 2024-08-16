import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import Reviews from "../../components/reviews/Reviews";

function Gig() {

  const {id} = useParams()

  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then(res=>{
        return res.data
      })
  })

  const userId = data?.userId

  const { isLoading: isLoadingUser, error: errorUser, data: dataUser } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then(res=>{
        return res.data
      }),
      enabled: !!userId
  })

  return (
    <div className="gig">
      {isLoading ? "Sabar" : error ? "Ada error" :
       <div className="container">
        <div className="left">
          <span className="breadcrumbs">BELIJASA {">"} SERVIS {">"} </span>
          <h1>{data.title}</h1>
          {isLoadingUser ? ("Sabar") : errorUser ? ("ada masalah") : (<div className="user">
            <img
              className="pp"
              src={dataUser.img || "/img/noavatar.jpg"}
              alt=""
            />
            <span>{dataUser.username}</span>
            {!isNaN(data.totalStars / data.starNumber) &&
            <div className="stars">
              {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item,i)=>(
              <img src="/img/star.png" alt="" key={i} />
              ))}
              <span>
                {Math.round(data.totalStars / data.starNumber)}</span>
            </div>}
          </div>)}
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            {data.images.map(img=>(
            <img
            key={img}
              src={img}
              alt=""
            />
            ))}
          </Slider>
          <h2>Tentang Jasa Ini</h2>
          <p>
          {data.desc}
          </p>
          {isLoadingUser ? ("Sabar") : errorUser ? ("ada masalah") : (
            <div className="seller">
            <h2>Tentang Penjual</h2>
            <div className="user">
              <img
                src={dataUser.img || "/img/noavatar.jpg"}
                alt=""
              />
              <div className="info">
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) &&
            <div className="stars">
              {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item,i)=>(
              <img src="/img/star.png" alt="" key={i} />
              ))}
              <span>
                {Math.round(data.totalStars / data.starNumber)}
                </span>
            </div>}
                <button>Hubungi Saya</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">Lokasi</span>
                  <span className="desc">{dataUser.country}</span>
                </div>
                <div className="item">
                  <span className="title">Anggota Sejak</span>
                  <span className="desc">Januari 2024</span>
                </div>
                <div className="item">
                  <span className="title">Waktu Respon</span>
                  <span className="desc">30 Menit</span>
                </div>
                <div className="item">
                  <span className="title">Penjualan Terakhir</span>
                  <span className="desc">1 hari</span>
                </div>
                <div className="item">
                  <span className="title">Bahasa</span>
                  <span className="desc">Indonesia</span>
                </div>
              </div>
              <hr />
              <p>
                {dataUser.desc}
              </p>
            </div>
          </div>)}
          <Reviews gigId={id}/>
        </div>
        <div className="right">
          <div className="price">
            <h3>{data.shortTitle}</h3>
            <h2>Rp. {data.price} </h2>
          </div>
          <p>
            {data.shortDesc}
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>{data.deliveryDate}Hari Pengerjaan</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>{data.revisionNumber} Garansi</span>
            </div>
          </div>
          <div className="features">
            {data.features.map((feature)=>(
            <div className="item" key={feature}>
              <img src="/img/greencheck.png" alt="" />
              <span>{feature}</span>
            </div>
          ))}
          </div>
          <button>Lanjutkan</button>
        </div>
      </div>}
    </div>
  );
}

export default Gig;