/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React from 'react'
import '../styles/main.scss'
import Particles from 'react-particles'
import { useCallback } from 'react'
// import { loadFull } from 'tsparticles'
const ParticlesBg = () => {
    // var randomColor = Math.floor(Math.random() * 16777215).toString(16)
    const particlesInit = useCallback(async engine => {
        console.log(engine)
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        // await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async container => {
        await console.log(container)
    }, [])
    return (
        <Particles
            className="particles-wrapper"
            // init={particlesInit}
            // loaded={particlesLoaded}
            params={{
                'particles': {
                    'number': {
                        'value': 25,
                        'density': {
                            'enable': true
                        }
                    },
                    'color': {
                        // 'value': `#${randomColor}` 
                        'value': '#64cef5'

                    },
                    'size': {
                        'value': 30,
                        'random': true,
                        'anim': {
                            'speed': 100,
                            'size_min': 90
                        }
                    },
                    'line_linked': {
                        'enable': false,
                        'opacity': 0.1,
                        'distance': 280
                    },
                    'move': {
                        'random': true,
                        'speed': 2.5,
                        'direction': 'top',
                        'out_mode': 'out'
                    }
                },
                'interactivity': {
                    'events': {
                        'onhover': {
                            'enable': true,
                            'mode': 'bubble'
                        },
                        'onclick': {
                            'enable': true,
                            'mode': 'repulse'
                        }
                    },
                    'modes': {
                        'bubble': {
                            'distance': 250,
                            'duration': 2,
                            'size': 0,
                            'opacity': 0.1
                        },
                        'repulse': {
                            'distance': 300,
                            'duration': 4
                        }
                    }
                }
            }} />
    )
}

export default ParticlesBg
