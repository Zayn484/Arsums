import React from 'react';
import Particles from 'react-particles-js';
import logo from '../../logo.svg';

export default (props) => (
	<div
		style={{
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%'
		}}
	>
		<Particles
			height={'100vh'}
			params={
				props.web ? (
					{
						particles: {
							color: {
								value: [ '#858585' ]
							},
							number: {
								value: 130
							},
							size: {
								value: 4
							},
							line_linked: {
								color: '#fbbc17',
								opacity: 1
							}
						},
						interactivity: {
							detect_on: 'window',
							events: {
								onhover: {
									enable: true,
									mode: 'repulse'
								},
								onclick: {
									enable: false,
									mode: 'bubble'
								}
							},
							modes: {
								grab: {
									distance: 400,
									line_linked: {
										opacity: 1
									}
								},
								bubble: {
									distance: 220,
									duration: 0.5,
									size: 100,
									opacity: 0.8
								},
								repulse: {
									size: 100,
									distance: 120,
									duration: 14
								},
								push: {
									particles_nb: 14
								},
								remove: {
									particles_nb: 12
								}
							}
						}
					}
				) : (
					{
						particles: {
							number: {
								value: 160,
								density: {
									enable: false
								}
							},
							color: {
								value: '#ffffff'
							},
							shape: {
								type: 'circle',
								stroke: {
									width: 3,
									color: '#000000'
								},
								polygon: {
									nb_sides: 4
								},
								image: {
									src: { logo },
									width: 100,
									height: 100
								}
							},
							opacity: {
								value: 0.4008530152163807,
								random: false,
								anim: {
									enable: true,
									speed: 1,
									opacity_min: 1,
									sync: false
								}
							},
							size: {
								value: 5,
								random: true,
								anim: {
									speed: 4,
									size_min: 0.3
								}
							},
							line_linked: {
								enable: false
							},
							move: {
								enable: true,
								speed: 4,
								direction: 'none',
								random: true,
								straight: false,
								out_mode: 'out',
								bounce: true,
								attract: {
									enable: true,
									rotateX: 600,
									rotateY: 1200
								}
							}
						},
						interactivity: {
							detect_on: 'window',
							events: {
								onhover: {
									enable: true,
									mode: 'repulse'
								},
								onclick: {
									enable: true,
									mode: 'bubble'
								}
							},
							modes: {
								grab: {
									distance: 400,
									line_linked: {
										opacity: 1
									}
								},
								bubble: {
									distance: 220,
									duration: 1,
									size: 50,
									opacity: 0.8
								},
								repulse: {
									distance: 160,
									duration: 14
								},
								push: {
									particles_nb: 14
								},
								remove: {
									particles_nb: 12
								}
							}
						}
					}
				)
			}
		/>
	</div>
);
