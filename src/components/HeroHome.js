import React from "react";
import HeroSlider, {Slide, Nav} from 'hero-slider';
import "./Hero.css"

const borobudurTample = 'https://cdn.pixabay.com/photo/2015/04/28/10/07/borobudur-743263_960_720.jpg'
const jogjakarta = 'https://images.unsplash.com/photo-1602057512587-76d5cc4b34e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'

const HeroHome = () => {
    return(
        <HeroSlider
            slidingAnimation='left_to_right'
            orientation='horizontal'
            set
            initialSlide={1}
            style={{
                backgroundColor: '#005A8D'
            }}
            settings={{
                slidingDuration: 500,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: false,
                autoplayDuration: 15000,
                height: '400px'
            }}>

            <Slide
            background={{
                backgroundImage: borobudurTample,
                backgroundAttachment: "fixed"
            }}>
                <div className="hero-content">
                    <div className="hero_inner">
                        <h2 className="hero_title">Salamat Datang di AyoJogja</h2>
                        <p className="hero_tagline">Temukan rekomendasi Wisata Alam terbaik di Yogyakarta!</p>
                    </div>
                </div>
            </Slide>

            <Slide
            background={{
                backgroundImage: jogjakarta,
                backgroundAttachment: "fixed"
            }}>
                <div className="hero-content">
                    <div className="hero_inner hero_container">
                        <h2 className="hero_title">YOGYAKARTA</h2>
                        <p className="hero_tagline">Kota Yogyakarta merupakan ibu kota dan pusat pemerintahan Provinsi Daerah Istimewa Yogyakarta. Kota ini dikenal sebagai kota besar yang mempertahankan konsep tradisional dan budaya jawa, serta memiliki beragam destinasi wisata yang indah. Yogyakarta juga dikenal sebagai Culture City karena banyak bagian dari kota ini masih dihiasi dengan sentuhan budaya Jawa. Ornamen-ornamen khas Jawa seperti lampu-lampu jalananan, bangunan atau gedung-gedung di sepanjang jalan dan lain-lain yang unik membuat kota ini menjadi tujuan banyak wisatawan untuk menjadi destinasi berlibur. Tak hanya itu, Yogyakarta juga memiliki banyak wisata alam yang indah dan gemar dikunjungi wisatawan lokal maupun internasional.</p>
                    </div>
                </div>
            </Slide>

            <Nav/>
        </HeroSlider>
    )
}

export default HeroHome;