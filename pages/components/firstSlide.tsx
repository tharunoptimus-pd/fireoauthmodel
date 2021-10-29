import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const Home: NextPage = () => {
	return (
		<>
			<div className="wrapper">
				<div className="header">
					<div className="logoHolder">
						<a href="/">
							<img
								src="/fire.png"
								alt="Fire Logo"
							/>
							<span>Fire OAuth</span>
						</a>
					</div>
				</div>

				<div className="titleContent">
					<span>
						One click passwordless private and secure authentication
					</span>
					<div className="getAPIDIV">
						<a href="#">
							<button className="getAPI">Get your API</button>
						</a>
					</div>
				</div>
			</div>

			<style jsx>{`
				.wrapper {
					height: 100%;
					display: flex;
					flex-direction: column;
				}

				.header {
					padding: 10px;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				.logoHolder a {
					display: flex;
					gap: 10px;
					align-items: center;
					text-decoration: none;
					color: #fff;
					width: max-content;
					width: -moz-max-content;
					font-size: 2.8rem;
				}

				.logoHolder img {
					height: 5rem;
					width: 5rem;
				}

				.getAPI {
					height: 70px;
					border: 0;
					border-radius: 5px;
					padding: 8px 31px;
					font-weight: 600;
					box-shadow: 0 0 20px 3px #44444444;
					cursor: pointer;
					outline: none;
					font-size: 1.5rem;
				}

				.getAPI:hover {
					transform: scale(1.05, 1.05);
					-webkit-transform: scale(1.05, 1.05);
					-moz-transform: scale(1.05, 1.05);
					transition: all 0.2s linear;
				}

				.titleContent {
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}

				.titleContent span {
					color: #fff;
					font-size: 3rem;
					text-align: center;
					max-width: 550px;
					text-shadow: 3px 3px 0px #4d5eb3;
				}

				.getAPIDIV {
					padding: 30px 20px 20px;
				}
			`}</style>
		</>
	)
}

export default Home
