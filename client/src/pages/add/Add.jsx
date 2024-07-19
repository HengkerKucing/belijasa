import React from 'react'
import "./Add.scss"

const Add = () => {
  return (
    <div className='add'>
      <div className="container">
        <h1>Tambah Jasa Baru</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Judul</label>
            <input type="text" placeholder='contoh : Aku akan melakukan sesuatu'/>
            <label htmlFor="">Kategori</label>
            <select name="cats" id="cats">
              <option value="design">Desain</option>
              <option value="servis">Servis</option>
              <option value="jahit">Jahit</option>
              <option value="pekerjaB">Pekerjaan Berat</option>
            </select>
            <label htmlFor="">Gambar Sampul</label>
            <input type="file" />
            <label htmlFor="">Unggah Gambar</label>
            <input type="file" multiple />
            <label htmlFor="">Deskripsi</label>
            <textarea name="" id="" cols="30" rows="16" placeholder='Jelaskan Jasamu kepada calon pembeli'></textarea>
            <button>Buat Jasa</button>
          </div>
          <div className="right">
            <label htmlFor="">Judul Layanan</label>
            <input type="text" placeholder='contoh : Servis 1 Hp' />
            <label htmlFor="">Deskripsi Pendek</label>
            <textarea name="" id="" cols="30" rows="10" placeholder='Deskripsi singkat'></textarea>
            <label htmlFor="">Waktu Pengerjaan(contoh 2 hari)</label>
            <input type="number" name="" id="" min={0}/>
            <label htmlFor="">Banyak Revisi atau Garansi</label>
            <input type="number" name="" id="" min={0}/>
            <label htmlFor="">Tambah Fitur</label>
            <input type="text" placeholder='Bonus Softcase' />
            <input type="text" placeholder='Bonus Screen Protector' />
            <input type="text" placeholder='Gratis Konsultasi' />
            <label htmlFor="">Harga</label>
            <input type="number" name="" id="" min={5000}/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Add