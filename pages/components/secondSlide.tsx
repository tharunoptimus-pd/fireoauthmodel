import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const Home: NextPage = () => {
	return (
		<>
			<div className="fireIsPrivate">
				<div className="curveContainer"></div>
				<span className="otherCompanies">
					Too many companies collect lot of data from your users and
					use it to track and serve intruding ads to them.
				</span>

				<span className="fireDoesNot">But Fire 🔥 does not!</span>
			</div>

			<style jsx>{`
				.fireIsPrivate {
					position: relative;
					height: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}

				.fireIsPrivate .curveContainer {
					background: url(/otherCompanies.svg) no-repeat
						center center;
					background-size: cover;
					position: absolute;
					height: 100%;
					width: 100%;
					top: 50%;
					left: 50%;
					z-index: -1;
					transform: translate(-50%, -50%);
				}

				.fireIsPrivate span {
					color: #fff;
					font-size: 2rem;
					text-align: center;
					max-width: 550px;
					text-shadow: 2px 2px 0px #4285f41f;
				}

				.fireIsPrivate .fireDoesNot {
					padding-top: 1.25rem;
					font-size: 3rem;
				}
			`}</style>
		</>
	)
}

export default Home
