import React from 'react'
import ScrollAnimation from
  'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import express from '../assets/express.svg'
const Tech = ({ DevIcon }) => {
  return (
    <div id='tech' className='devicon-container tech' >
      <ScrollAnimation
        offset={300}
        animateIn='flipInX'>
        <a href='#tech'>
          <h1>The tech I use</h1>
        </a>
        <ol className='icon-list'>
          <li className='devicon '><svg viewBox="0 0 128 128">
            <path fill="#0000" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="current" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
          </svg>
            TypeScript</li>
          <li className='devicon '><svg viewBox="0 0 128 128">
            <g fill="current"><path d="M80.6 40.3h.4l-.2-.2 14-14v-.3c-11.8-10.4-28.1-14-43.2-9.5C36.5 20.8 24.9 32.8 20.7 48c.2-.1.5-.2.8-.2 5.2-3.4 11.4-5.4 17.9-5.4 2.2 0 4.3.2 6.4.6.1-.1.2-.1.3-.1 9-9.9 24.2-11.1 34.6-2.6h-.1z"></path><path d="M108.1 47.8c-2.3-8.5-7.1-16.2-13.8-22.1L80 39.9c6 4.9 9.5 12.3 9.3 20v2.5c16.9 0 16.9 25.2 0 25.2H63.9v20h-.1l.1.2h25.4c14.6.1 27.5-9.3 31.8-23.1 4.3-13.8-1-28.8-13-36.9z"></path><path d="M39 107.9h26.3V87.7H39c-1.9 0-3.7-.4-5.4-1.1l-15.2 14.6v.2c6 4.3 13.2 6.6 20.7 6.6z"></path><path d="M40.2 41.9c-14.9.1-28.1 9.3-32.9 22.8-4.8 13.6 0 28.5 11.8 37.3l15.6-14.9c-8.6-3.7-10.6-14.5-4-20.8 6.6-6.4 17.8-4.4 21.7 3.8L68 55.2C61.4 46.9 51.1 42 40.2 42.1z"></path></g>
          </svg>
            Google Cloud Platform</li>    <li className='devicon '><DevIcon icon='javascript' />JavaScript</li>
          <li className='devicon '><DevIcon icon='html5' />HTML5</li>
          <li className='devicon '><DevIcon icon='css3' />CSS3</li>
          <li className='devicon '><DevIcon icon='sass' />Sass</li>
          <li className='devicon '><DevIcon icon="mongodb" />MongoDb</li>
          <li className='devicon '><img src={express} />Express</li>
          <li className='devicon '><DevIcon icon='react' />React</li>
          <li className='devicon '><DevIcon icon='nodejs' />Node.js</li>
          <li className='devicon '><DevIcon icon='python' />Python</li>
          <li className='devicon '><DevIcon icon="postgresql" />PostgreSQL</li>
          <li className='devicon '><DevIcon icon="django" />Django</li>
          <li className='devicon '><DevIcon icon='git' />Git</li>
          <li className='devicon '><DevIcon icon='github_badge' />Github</li>
          <li className='devicon '><svg viewBox="0 0 128 128">
            <path fill="path" d="M126.615 72.31l-7.034-21.646-13.94-42.902c-.54-1.662-2.44-2.07-3.654-1.23-.4.276-.724.853-.902 1.398L87.144 51H40.856L31.62 22.41 26.917 7.847a2.748 2.748 0 00-.372-.767c-.078-.104-.18-.194-.27-.28-.937-.89-2.465-.876-3.36.072a2.336 2.336 0 00-.556.894l-13.94 42.9-2.946 9.068L1.385 72.31a4.78 4.78 0 00.85 4.496c.26.317.55.613.89.86L64 121.895l60.874-44.227a4.785 4.785 0 001.74-5.357zm-7.034-21.647z"></path>
          </svg>GitLab</li>
          <li className='devicon '><DevIcon icon='npm' />npm</li>
          <li className='devicon '><DevIcon icon="heroku" />Heroku</li>
          <li className='devicon '><svg viewBox="0 0 128 128">
            <defs><linearGradient id="jira-original-a" gradientUnits="userSpaceOnUse" x1="22.034" y1="9.773" x2="17.118" y2="14.842" gradientTransform="scale(4)"><stop offset=".176" stopColor="#0052cc"></stop><stop offset="1" stopColor="#2684ff"></stop></linearGradient><linearGradient id="jira-original-b" gradientUnits="userSpaceOnUse" x1="16.641" y1="15.564" x2="10.957" y2="21.094" gradientTransform="scale(4)"><stop offset=".176" stopColor="#0052cc"></stop><stop offset="1" stopColor="#2684ff"></stop></linearGradient></defs><path d="M108.023 16H61.805c0 11.52 9.324 20.848 20.847 20.848h8.5v8.226c0 11.52 9.328 20.848 20.848 20.848V19.977A3.98 3.98 0 00108.023 16zm0 0" fill="current"></path><path d="M85.121 39.04H38.902c0 11.519 9.325 20.847 20.844 20.847h8.504v8.226c0 11.52 9.328 20.848 20.848 20.848V43.016a3.983 3.983 0 00-3.977-3.977zm0 0" fill="current"></path><path d="M62.219 62.078H16c0 11.524 9.324 20.848 20.848 20.848h8.5v8.23c0 11.52 9.328 20.844 20.847 20.844V66.059a3.984 3.984 0 00-3.976-3.98zm0 0" fill="current"></path>
          </svg>Jira</li>
          <li className='devicon '><svg viewBox="0 0 128 128">
            <path fill="current" d="M59.2 0l40 40-24 24 32 31.9L59.4 128l-40-39.9 7.7-56z"></path>
          </svg>Bulma</li>

          <li className='devicon '><svg viewBox="0 0 128 128">
            <path d="M27.255 80.719c0 7.33-5.978 13.317-13.309 13.317C6.616 94.036.63 88.049.63 80.719s5.987-13.317 13.317-13.317h13.309zm6.709 0c0-7.33 5.987-13.317 13.317-13.317s13.317 5.986 13.317 13.317v33.335c0 7.33-5.986 13.317-13.317 13.317-7.33 0-13.317-5.987-13.317-13.317zm0 0" fill="current"></path><path d="M47.281 27.255c-7.33 0-13.317-5.978-13.317-13.309C33.964 6.616 39.951.63 47.281.63s13.317 5.987 13.317 13.317v13.309zm0 6.709c7.33 0 13.317 5.987 13.317 13.317s-5.986 13.317-13.317 13.317H13.946C6.616 60.598.63 54.612.63 47.281c0-7.33 5.987-13.317 13.317-13.317zm0 0" fill="current"></path><path d="M100.745 47.281c0-7.33 5.978-13.317 13.309-13.317 7.33 0 13.317 5.987 13.317 13.317s-5.987 13.317-13.317 13.317h-13.309zm-6.709 0c0 7.33-5.987 13.317-13.317 13.317s-13.317-5.986-13.317-13.317V13.946C67.402 6.616 73.388.63 80.719.63c7.33 0 13.317 5.987 13.317 13.317zm0 0" fill="current"></path><path d="M80.719 100.745c7.33 0 13.317 5.978 13.317 13.309 0 7.33-5.987 13.317-13.317 13.317s-13.317-5.987-13.317-13.317v-13.309zm0-6.709c-7.33 0-13.317-5.987-13.317-13.317s5.986-13.317 13.317-13.317h33.335c7.33 0 13.317 5.986 13.317 13.317 0 7.33-5.987 13.317-13.317 13.317zm0 0" fill="current"></path>
          </svg> Slack</li>
          <li className='devicon '><svg viewBox="0 0 128 128">
            <path d="M3.656 45.043s-3.027-2.191.61-5.113l8.468-7.594s2.426-2.559 4.989-.328l78.175 59.328v28.45s-.039 4.468-5.757 3.976zm0 0" fill="current"></path><path d="M23.809 63.379L3.656 81.742s-2.07 1.543 0 4.305l9.356 8.527s2.222 2.395 5.508-.328l21.359-16.238zm0 0" fill="current"></path><path d="M59.184 63.531l36.953-28.285-.239-28.297S94.32.773 89.055 3.99L39.879 48.851zm0 0" fill="current"></path><path d="M90.14 123.797c2.145 2.203 4.747 1.48 4.747 1.48l28.797-14.222c3.687-2.52 3.171-5.645 3.171-5.645V20.465c0-3.735-3.812-5.024-3.812-5.024L98.082 3.38c-5.453-3.379-9.027.61-9.027.61s4.593-3.317 6.843 2.96v112.317c0 .773-.164 1.53-.492 2.214-.656 1.332-2.086 2.57-5.504 2.051zm0 0" fill="current"></path>
          </svg> vscode</li>
          <li className='devicon '><svg viewBox="0 0 128 128">
            <g fill="current"><path d="M63.81 118.63l-61-70.46v-.31l26.61-35.45.17-.1L64 8.7l34.43 3.61.17.1 26.6 35.44v.31l-61 70.46zM3.32 48L64 118.08 124.68 48 98.25 12.79 64 9.2l-34.25 3.59z"></path><path d="M63.81 118.63l-61-70.46.19-.42h24.71l.22.14 36.29 70.46zM3.55 48.25l59.27 68.47-35.26-68.47z"></path><path d="M64.19 118.63l-.41-.28 36.29-70.46.22-.14H125l.19.41zm36.26-70.38l-35.27 68.47 59.27-68.47z"></path><path d="M64.22 118.58h-.44L27.49 48.11l.22-.36h72.58l.22.36zm-36.1-70.33L64 117.92l35.88-69.67z"></path><path d="M27.89 48.17l-.43-.17 1.91-35.44.22-.23L64 8.7l.21.42zm2-35.39L28 47.32 63.36 9.27z"></path><path d="M100.11 48.17l-36.29-39L64 8.7l34.38 3.6.22.23L100.54 48zM64.64 9.27L100 47.32l-1.86-34.54z"></path><path d="M125 48.25h-24.71L100 48l-1.87-35.43.45-.16 26.62 35.44zm-24.47-.5h24L98.68 13.36z"></path><path d="M100.29 48.25H27.71l-.18-.42 36.29-39h.37l36.29 39zm-72-.5h71.43L64 9.32z"></path><path d="M27.71 48.25H3l-.2-.4 26.62-35.44.45.16L28 48zm-24.21-.5h24l1.85-34.39z"></path></g>
          </svg>Sketch
          </li>
          <li className='devicon '><svg viewBox="0 0 128 128" fill='current'>
            <path d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
          </svg>Figma</li>
          <li className='devicon '><DevIcon icon="yarn" /></li>
          <li className='devicon '><DevIcon icon="yarn" /></li>
        </ol>
      </ScrollAnimation>
    </div>
  )
}
export default Tech
