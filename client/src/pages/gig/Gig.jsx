import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function Gig() {

  const {id} = useParams()

  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then(res=>{
        return res.data
      })
  })

  const { isLoading: isLoadingUser, error: errorUser, data: dataUser } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      newRequest.get(`/users/${data.userId}`).then(res=>{
        return res.data
      })
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
          <div className="reviews">
            <h2>Ulasan</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Joko Santoso</span>
                  <div className="country">
                    <img
                      src="https://i.pinimg.com/564x/19/25/6f/19256fc3387dc4c7b384e6e8af443d32.jpg"
                      alt=""
                    />
                    <span>Kudus</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>
                5
                </span>
              </div>
              <p>
                bagus anjay
              </p>
              <div className="helpful">
                <span>Membantu?</span>
                <img src="/img/like.png" alt="" />
                <span>Ya</span>
                <img src="/img/dislike.png" alt="" />
                <span>Tidak</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Agus Kopling</span>
                  <div className="country">
                    <img
                      src="https://i.pinimg.com/564x/19/25/6f/19256fc3387dc4c7b384e6e8af443d32.jpg"
                      alt=""
                    />
                    <span>Jepara</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                MantabMennnnn!
              </p>
              <div className="helpful">
                <span>Membantu?</span>
                <img src="/img/like.png" alt="" />
                <span>Ya</span>
                <img src="/img/dislike.png" alt="" />
                <span>Tidak</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Sopo Jarwo </span>
                  <div className="country">
                    <img
                      src="https://i.pinimg.com/564x/19/25/6f/19256fc3387dc4c7b384e6e8af443d32.jpg"
                      alt=""
                    />
                    <span>Rembang</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Amazing work! Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Membantu?</span>
                <img src="/img/like.png" alt="" />
                <span>Ya</span>
                <img src="/img/dislike.png" alt="" />
                <span>Tidak</span>
              </div>
            </div>
          </div>
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