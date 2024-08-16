import React, { useState, useEffect } from 'react';
import "./Home.scss";
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import { cards, projects } from "../../data";
import CatCard from '../../components/catCard/CatCard';
import ProjectCard from '../../components/projectCard/ProjectCard';

const Home = () => {
  const words = ['jasa', 'layanan', 'pekerjaan', 'keahlian', 'bantuan'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        setTypedWord(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        setTypingSpeed(50);
      } else {
        setTypedWord(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        setTypingSpeed(150); 
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, typingSpeed, words, currentWordIndex]);

  return (
    <div className='home'>
      <div className="featured">
        <div className="container">
          <div className="left">
            <h1>Temukan <span className="changing-word">{typedWord}</span> freelance yang sempurna untuk kebutuhan Anda</h1>
            <div className="search">
              <div className="searchInput">
                <img src="/img/search.png" alt="search icon" />
                <input type="text" placeholder="Cari layanan..." />
              </div>
              <button>Cari</button>
            </div>
            <div className="popular">
              <span>Popular:</span>
              <button>Desain Logo</button>
              <button>Pengembangan Web</button>
              <button>Servis Motor</button>
              <button>Penerjemahan</button>
            </div>
          </div>

          <div className="right">
            <img src="./img/model.png" alt="Man Illustration" />
          </div>
        </div>
      </div>

      <TrustedBy />

      <Slide slidesToShow={4} arrowsScroll={3}>
        {cards.map(card => (
          <CatCard key={card.id} item={card} />
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
            <p>Temukan layanan berkualitas tinggi di setiap harga. Tidak ada tarif per jam, hanya penetapan harga berdasarkan proyek.</p>
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
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d85c8f7113e7f18d6fca144840de5afa-1718619183018/X1.png" alt="Business Solution" />
          </div>
        </div>
      </div>

      <Slide slidesToShow={3} arrowsScroll={3}>
        {projects.map(card => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
