import React from "react";
import HeroHome from "../components/HeroHome";
import "./Home.css"

const prokes ='https://image.freepik.com/free-vector/person-fighting-virus-illustrated_52683-35833.jpg'
const ppkm ='https://image.freepik.com/free-vector/tourists-wearing-face-masks_23-2148623090.jpg'

const Home = () => {
    return (
        <div>
            <HeroHome/>
            <div className="contents">
                <div className="content-title">
                    <h1>Panduan Wisata</h1>
                </div>
                <div className="content-prokes">
                    <img src={prokes} alt="protokol-kesehatan"/>
                    <div className="content-description">
                        <h2 className="highlight">Protokol Kesehatan</h2>
                        <p>Hal yang harus diperhatikan saat berwisata :</p>
                        <ol>
                            <li>Pastikan diri anda dalam keadaan sehat sebelum pergi.</li>
                            <li>Selalu gunakan masker.</li>
                            <li>Sering mencuci tangan dengan sabun atau hand sanitizer.</li>
                            <li>Hindari menyentuh area wajah seperti mata, hidung, dan mulut.</li>
                            <li>Tetap memperhatikan jarak minimal 1 meter.</li>
                            <li>Saat sampai rumah, segera mandi dan berganti pakaian sebelum berinteraksi dengan keluarga.</li>
                            <li>Bersihkan barang-barang yang sebelumnya anda bawa dengan desinfektan.</li>
                        </ol>
                    </div>
                </div>
                <div className="content-ppkm">
                    <div className="content-description">
                        <h2 className="highlight">Peraturan PPKM</h2>
                        <p>Adapun ketentuan berlibur di Yogyakarta, yaitu :</p>
                        <ol>
                            <li>Kapasitas pengunjung maksimal 25 persen.</li>
                            <li>Mengikuti protokol kesehatan yang diatur oleh Kementerian Kesehatan dan/atau kementerian/lembaga terkait.</li>
                            <li>Wajib menggunakan aplikasi Peduli Lindungi untuk melakukan skrining terhadap semua pengunjung dan pegawai.</li>
                            <li>Menggunakan aplikasi Visiting Jogja bagi pengelola dan pengunjung yang akan memasuki tempat wisata.</li>
                            <li>Anak usia dibawah 12 (dua belas) tahun diperbolehkan masuk di tempat wisata yang sudah menggunakan aplikasi Peduli Lindungi dengan syarat didampingi orang tua. <mark>Tips:</mark> bawa juga kartu vaksin karena mungkin sulit mendapat sinyal internet di beberapa tempat.</li>
                            <li>Mengikuti aturan penerapan ganjil – genap di sepanjang jalan menuju dan dari lokasi tempat wisata mulai Jumat pukul 12.00 sampai dengan Minggu pukul 18.00 waktu setempat.</li>
                        </ol>
                        <div className="source">
                            <p>(update: 16 November 2021)</p>
                            <p>Source :</p>
                            <li><a target="_blank" rel="noreferrer" href="https://covid19.go.id/p/regulasi/instruksi-menteri-dalam-negeri-nomor-60-tahun-2021">Instruksi Menteri Dalam Negeri Nomor 60 Tahun 2021.</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.jogjaprov.go.id/pengumuman/detail/199-instruksi-gubernur-diy-no-35-2021-tentang-perpanjangan-pemberlakuan-pembatasan-kegiatan-masyarakat">Instruksi Gubernur DIY No. 35/2021.</a></li>
                        </div>
                    </div>
                    <img src={ppkm} alt="Peraturan PPKM"/>
                </div>
            </div>
        </div>
    )
}

export default Home;