import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">BELIJASA > SERVIS > </span>
          <h1>Saya akan menservis HP Anda</h1>
          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Luqman Aldi</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>Tentang Jasa Ini</h2>
          <p>
          Saya akan menservis hp kamu. hp tipe apa saja saya bisa, dari kerusakan ringan hingga berat. cukup beli jasa saya lalu datang ke tempat saya maka saya akan menservis hp kamu. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores saepe magni consequuntur nesciunt nulla iure quam! Exercitationem voluptatem, nemo incidunt doloribus alias possimus? Incidunt aliquid atque neque illo? Voluptatibus, commodi.
          </p>
          <div className="seller">
            <h2>Tentang Penjual</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>Luqman Aldi</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Hubungi Saya</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">Lokasi</span>
                  <span className="desc">Pati, Indonesia</span>
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
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
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
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
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
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Agus Koling</span>
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
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
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
            <h3>1 HP Rusak</h3>
            <h2>Rp. 100.000 - </h2>
          </div>
          <p>
            Saya akan memperbaiki hp kamu harga mulai 100rb tergantung kerusakan
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Hari Pengerjaan</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>1 Garansi</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button>Lanjutkan</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;