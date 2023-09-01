import { React } from 'react';
import './gallery.css';

import { Link } from 'react-router-dom';

import { PageBanner } from '../../containers';

import { BiChevronsRight } from 'react-icons/bi';

import galleryimg1 from '../../assets/galleryimg1.jfif';
import galleryimg2 from '../../assets/galleryimg2.jfif';
import galleryimg3 from '../../assets/galleryimg3.jpg';
import galleryimg4 from '../../assets/galleryimg4.jfif';
import galleryimg5 from '../../assets/galleryimg5.jpg';
import galleryimg6 from '../../assets/galleryimg6.jpg';
import galleryimg7 from '../../assets/galleryimg7.jpg';
import galleryimg8 from '../../assets/galleryimg8.jpg';
import galleryimg9 from '../../assets/galleryimg9.jpg';


const Gallery = () => {

  return (
    <>
    <PageBanner page="Gallery" />
    <section className="maximus__gallery">
        <div className="maximus__gallery-content">
            <div className="maximus__gallery-content_container">
                <img src={galleryimg1} alt="gallery_img" />
            </div>

            <div className="maximus__gallery-content_container">
                <img src={galleryimg2} alt="gallery_img" />
            </div>

            <div className="maximus__gallery-content_container">
                <img src={galleryimg3} alt="gallery_img" />
            </div>

            <div className="maximus__gallery-content_container">
                <img src={galleryimg4} alt="gallery_img" />
            </div>

            <div className="maximus__gallery-content_container">
                <img src={galleryimg5} alt="gallery_img" />
            </div>

            <div className="maximus__gallery-content_container">
                <img src={galleryimg6} alt="gallery_img" />
            </div>

            <div className="maximus__gallery-content_container">
                <img src={galleryimg7} alt="gallery_img" />
            </div>

            <div className="maximus__gallery-content_container">
                <img src={galleryimg8} alt="gallery_img" />
            </div>

            <div className="maximus__gallery-content_container">
                <img src={galleryimg9} alt="gallery_img" />
            </div>
        </div>

        <div className="maximus__gallery-buttons">
            <Link to="/gallery/page-1">1</Link>
            <Link to="/gallery/page-2">2</Link>
            <Link to="/gallery/page-2"><BiChevronsRight size={30} /></Link>
        </div>
    </section>
    </>
  )
}

export default Gallery