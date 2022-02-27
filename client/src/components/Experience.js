import React from 'react'
const Experience = () => {
  return (
    <div id='experience' className='experience'>
      <a href='#experience'><h1>Recent Experience</h1></a>
      <div className="xp-detail sei-54">
        <h2>Full-Stack Developer, Warner Music Group</h2>
        <h3></h3>

        <p>Developing internal company-wide tools as part of the Audience Engagement Team, utilizing Spotify&apos;s API, Google Cloud Platform, React, TypeScript and more!</p>
      </div>
      <div className='xp-detail sei-54'>
        <h2>Software Engineering Immersive,  General Assembly </h2>
        {/* <h3>February 2021 - April 2021</h3> */}

        <p>
          A full-time 12-week immersive course focusing on full-stack development; consisting of structured lessons, pair-coding exercises, homework, and both solo and group projects.
        </p>
      </div>
      <div className='xp-detail warner-music'>
        <h2>e-Commerce Store Manager, Warner Music Group  </h2>

        {/* <h3>October 2018 - September 2020</h3> */}

        <p>Managed online stores for  Warner
          Records and Parlophone roster. Artists include Muse, Liam Gallagher, Dua Lipa, Coldplay, and Gorillaz.</p>
      </div>
    </div>
  )
}
export default Experience
