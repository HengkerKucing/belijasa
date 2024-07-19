import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import {cards, projects} from "../../data"
import CatCard from '../../components/catCard/CatCard'
import ProjectCard from '../../components/projectCard/ProjectCard'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={4} arrowsScroll={3}>
        {cards.map(card=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Seluruh jasa di ujung jari Anda</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Terbaik untuk setiap harga
            </div>
            <p>
            Temukan layanan berkualitas tinggi di setiap harga. Tidak ada tarif per jam, hanya penetapan harga berdasarkan proyek.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Terbaik untuk setiap harga
            </div>
            <p>
            Temukan layanan berkualitas tinggi di setiap harga.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Terbaik untuk setiap harga
            </div>
            <p>
            Temukan layanan berkualitas tinggi di setiap harga.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Terbaik untuk setiap harga
            </div>
            <p>
            Temukan layanan berkualitas tinggi di setiap harga.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>BeliJasa Bisnis</h1>
            <h1>Solusi bisnis yang dirancang untuk tim</h1>
            <p>Tingkatkan ke pengalaman terbaik yang dilengkapi dengan alat dan manfaat, didedikasikan untuk bisnis</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Terhubung dengan pekerja lepas dengan pengalaman bisnis yang terbukti
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Dicocokkan dengan bakat sempurna dari manajer kesuksesan pelanggan
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Kelola kerja tim dan tingkatkan produktivitas dengan satu ruang kerja canggih
            </div>
            <button>Jelajahi belijasa bisnis</button>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d85c8f7113e7f18d6fca144840de5afa-1718619183018/X1.png" alt="" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={3} arrowsScroll={3}>
        {projects.map(card=>(
          <ProjectCard key={card.id} item={card}/>
        ))}
      </Slide>
    </div>
  )
}

export default Home