import React from 'react'
import './pageBanner.css';

const PageBanner = (props) => {
  return (
    <section className="maximus__pagebanner">
        <h2>{props.page}</h2>
    </section>
  )
}

export default PageBanner