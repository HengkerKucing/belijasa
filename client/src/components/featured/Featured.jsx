import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Temukan layanan <i>jasa</i> yang sempurna untuk Anda</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" />
                        <input type="text" placeholder='Coba "servis printer"' />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Pelatih Renang</button>
                    <button>Jahit Baju</button>
                    <button>Gym Trainer</button>
                    <button>Servis Voli</button>
                </div>
            </div>
            <div className="right">
                <img src="./img/man.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured