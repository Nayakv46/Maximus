import { React } from 'react';
import './gallery2.css';

import { Link } from 'react-router-dom';

import { PageBanner } from '../../containers';

import { BiChevronsLeft } from 'react-icons/bi';

import galleryimg10 from '../../assets/galleryimg10.jpg';
import galleryimg11 from '../../assets/galleryimg11.jfif';
import galleryimg12 from '../../assets/galleryimg12.jfif';


const Gallery = () => {

  return (
    <>
    <PageBanner page="Gallery" />
    <section className="maximus__gallery">
        <div className="maximus__gallery-content">
            <div className="maximus__gallery-content_container">
                <img src={galleryimg10} alt="gallery_img" />
            </div>

            <div className="maximus__gallery-content_container">
                <img src={galleryimg11} alt="gallery_img" />
            </div>

            <div className="maximus__gallery-content_container">
                <img src={galleryimg12} alt="gallery_img" />
            </div>

        </div>

        <div className="maximus__gallery2-buttons">
            <Link to="/gallery/page-1"><BiChevronsLeft size={30} /></Link>
            <Link to="/gallery/page-1">1</Link>
            <Link to="/gallery/page-2">2</Link>
        </div>
    </section>
    </>
  )
}

export default Gallery