import React from 'react';
import { withRouter } from 'react-router-dom';

// const branding = [
// 	{
// 		title: 'Brand Development',
// 		content:
// 			'If you‟re a blossoming business, this is just the solution for you. We‟ll help you establish a firm footing in your niche and get closer to achieving your market goals. A great brand begins with a great name. Using a combination of market research, and surveying real people within your target demographic, we create modern company and product names that are memorable and position your brand for success.'
// 	},
// 	{
// 		title: 'Brand Refresh',
// 		content:
// 			'If your branding needs a makeover, opt for this. From choosing the right colors and typography to establishing brand consistency, we‟ll help you build business exposure and image. A well thought out rebrand can help change perceptions of your company, increase sales, and position you properly, to help you win your ideal customers or clients.'
// 	},
// 	{
// 		title: 'Logo & Brand Identity Design',
// 		content:
// 			'Our team creates a logo and visual identity that is flexible for all environments and designed to attract specific audiences through research and creative strategy. Your logo design is the unique mark that people instantly associate with your business. Just like Nike‟s tick, your logo design should be the simplest visual mark that can be used to identify your business.'
// 	},
// 	{
// 		title: 'Print Design ',
// 		content:
// 			'Print design, such as brochures, is a great way to communicate with your customers, while giving them something physical to keep.  Offline, your brand must also leave a consistent and lasting impression. We design printed collateral such as corporate brochures, packaging, trade show displays, as well as a variety of marketing material and promotional products. As a customer keeps your print or brochure, it needs to communicate your brand without you.'
// 	},
// 	{
// 		title: 'Stationery Design ',
// 		content:
// 			'Your stationery design plays a key role in building brand consistency for your business. When you hand out your business card at an exhibition, it‟s important they work to enhance your brand messaging.'
// 	},
// 	{
// 		title: 'Brand Guidelines ',
// 		content:
// 			'An essential set of rules that outline how your brand works. We create brand guidelines which typically include rules for logo usage, color palette, typography, spacing, image style, and more in order to ensure brand consistency.'
// 	},
// 	{
// 		title: 'Content Strategy ',
// 		content:
// 			'The voice and tone of your brand are crucial components to attracting and aligning with your audience. The right blend of compelling text, engaging video and high-quality imagery is all part of an effective content strategy that strengthens brand equity. '
// 	},
// 	{
// 		title: 'Brand Acceleration ',
// 		content:
// 			'Through various strategies such as focusing on your brand strengths, freshening up the outdated, and increasing positive word of mouth, ARSUM‟S accelerates your brand‟s growth.'
// 	}
// ];

// const ui = [
// 	{
// 		title: 'UX Design',
// 		content:
// 			'We enhance your audience’s connection to your brand by crafting modern, digital experiences. Our User Experience design implements creative foresight. We push boundaries, but don’t fall for passing trends.'
// 	},
// 	{
// 		title: 'UI Design',
// 		content:
// 			'A visually striking and strategically organized user interface is necessary for your audience to find exactly what they’re looking for, and engage with your brand as quickly as possible.'
// 	},
// 	{
// 		title: 'Mobile App Design',
// 		content:
// 			'Great mobile apps begin with fantastic mobile designers. Our team of mobile design experts has a passion for bringing your apps to phones and tablets in the style that best meets the needs of your customers. We have the mobile design expertise needed to make your app stand out from the crowd!'
// 	},
// 	{
// 		title: 'Outcome Driven Design',
// 		content:
// 			'We enhance your audience’s connection to your brand by crafting modern, digital experiences. Our User Experience design implements creative foresight. We push boundaries, but don’t fall for passing trends.'
// 	},
// 	{
// 		title: 'UX Design',
// 		content:
// 			'We enhance your audience’s connection to your brand by crafting modern, digital experiences. Our User Experience design implements creative foresight. We push boundaries, but don’t fall for passing trends.'
// 	}
// ];

const selectHandler = (props, id) => {
	props.history.push({ pathname: '/expertise/' + id, category: id });
};

const expertise = (props) => (
	<section className="container-fluid Expertise-Section">
		<div className="  ">
			<div className="Heading">
				<h1 className="text-center ">What We Do & Love</h1>
			</div>

			<div className="row no-gutters   justify-content-center">
				<div
					className="col-12 col-sm-10 col-md-5 col-lg-3 p-3 bg-white Card "
					onClick={() => selectHandler(props, 'branding')}
				>
					<div>
						<h4 className="text-center ">Branding</h4>
					</div>
					<ul>
						<li>Brand Strategy & Experience</li>
						<li>Logo Design and Variations </li>
						<li>Design Book</li>
						<li>Business Cards</li>
						<li>Info Brochures, Banners and Flyers</li>
					</ul>
				</div>
				<div
					className="col-12 col-sm-10 col-md-5 col-lg-3  p-3 bg-white Card"
					onClick={() => selectHandler(props, 'ui')}
				>
					<div>
						<h4 className="text-center ">UI / UX</h4>
					</div>
					<ul>
						<li>UI/UX Design</li>

						<li>Sketch, Photoshop</li>
						<li>Banners</li>
						<li>Responsive Web Design</li>
						<li>Custom Web Design</li>
					</ul>
				</div>
				<div
					className="col-12 col-sm-10 col-md-5 col-lg-3  p-3 bg-white Card"
					onClick={() => selectHandler(props, 'web')}
				>
					<div>
						<h4 className="text-center ">Web development</h4>
					</div>
					<ul>
						<li>Responsive Website Development</li>
						<li>E-Commerce Website Development</li>
						<li>CMS based Website Development</li>
						<li>SEO Optimized Websites</li>
						<li>Web Portals</li>
					</ul>
				</div>
				<div
					className="col-12 col-sm-10 col-md-5 col-lg-3  p-3 bg-white Card"
					onClick={() => selectHandler(props, 'mobile')}
				>
					<div>
						<h4 className="text-center ">Mobile App Development</h4>
					</div>
					<ul>
						<li>IPhone app development</li>
						<li>Android app development</li>
						<li>Cross-platform app development</li>
						<li>Single Page Apps (SPA)</li>
						<li>Block Chain web app development</li>
					</ul>
				</div>

				<div
					className="col-12 col-sm-10 col-md-5 col-lg-3  p-3 bg-white Card"
					onClick={() => selectHandler(props, 'ecommerce')}
				>
					<div>
						<h4 className="text-center ">E-Commerce</h4>
					</div>
					<ul>
						<li>Shopify Development</li>
						<li>WooCommerce Development</li>
						<li>E-Commerce Consulting</li>
						<li>Magento Development</li>
						<li>Online Shops</li>
					</ul>
				</div>
				<div
					className="col-12 col-sm-10 col-md-5 col-lg-3  p-3 bg-white Card"
					onClick={() => selectHandler(props, 'it')}
				>
					<div>
						<h4 className="text-center ">IT & Startups Consulting</h4>
					</div>
					<ul>
						<li>We validate your idea</li>
						<li>Market research</li>
						<li>Competition analysis</li>
						<li>Opportunity recognition</li>
						<li>Individual advice</li>
					</ul>
				</div>
				<div
					className="col-12 col-sm-10 col-md-5 col-lg-3  p-3 bg-white Card"
					onClick={() => selectHandler(props, 'seo')}
				>
					<div>
						<h4 className="text-center ">SEO</h4>
					</div>
					<ul>
						<li>Qualified Lead Generation</li>
						<li>EFFECTIVE ON-PAGE and OFF-Page SEO strategies</li>
						<li>Drive Targeted Traffic to Your Website</li>
						<li>Map and Mobile Optimization</li>
						<li>Detailed Transparent Reporting</li>
					</ul>
				</div>
				<div
					className="col-12 col-sm-10 col-md-5 col-lg-3  p-3 bg-white Card"
					onClick={() => selectHandler(props, 'marketing')}
				>
					<div>
						<h4 className="text-center ">Digital Marketing</h4>
					</div>
					<ul>
						<li>Creative Strategy</li>
						<li>Campaign Management</li>
						<li>Community Management</li>
						<li>Social Media Marketing</li>
						<li>Email Marketing</li>
					</ul>
				</div>
				<div
					className="col-12 col-sm-10 col-md-5 col-lg-3  p-3 bg-white Card"
					onClick={() => selectHandler(props, 'white')}
				>
					<div>
						<h4 className="text-center ">White label</h4>
					</div>
					<ul>
						<li>We help your business the customer pays you You pay us full confidentiality</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
);

export default withRouter(expertise);
