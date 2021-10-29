import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const Home: NextPage = () => {
	return (
		<>
			<div className="easyForDevelopers">
				<div className="easySectionContainer">
					<span className="easyTitle">
						Easy on your developers, easier on your users.
					</span>

					<div className="pointsHolder">
						<div className="infoContainer">
							<span className="infoTitle">
								Takes less than 5 minutes to setup, preview and
								ship it!
							</span>
							<span>
								We know that setting up login is tedious, so
								Fire makes it easy for developers to start using
								the OAuth service.
							</span>
						</div>
						<div className="imageContainer">
							<img
								src="/happy.gif"
								alt="Happy developers"
							/>
						</div>
					</div>

					<div className="pointsHolder">
						<div className="imageContainer">
							<img
								src="/secured.gif"
								alt="Secured"
							/>
						</div>
						<div className="infoContainer">
							<span className="infoTitle">
								Your users' data never leaves their device.
							</span>
							<span>
								Fire app on your users device will generate a
								token and sent to your servers. Only your
								servers can access the data.
							</span>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.easyForDevelopers {
					background-color: #9c88ff;
				}

				.easySectionContainer {
					max-width: 900px;
					margin: 0 auto;
					color: #fff;
				}

				.easySectionContainer .easyTitle {
					padding: 34px;
					font-size: 3rem;
					font-weight: 400;
					color: #fff;
					justify-content: center;
					display: flex;
					text-align: center;
				}

				.easySectionContainer .pointsHolder {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-evenly;
					font-size: 1.4rem;
					text-align: center;
					padding-bottom: 30px;
				}

				@media (max-width: 768px) {
					.easySectionContainer .pointsHolder {
						justify-content: space-between;
					}
				}

				@media (max-width: 30em) {
					.easySectionContainer .pointsHolder {
						justify-content: center;
					}
				}

				.easySectionContainer .infoContainer {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding: 0 20px;
					max-width: 300px;
				}

				.easySectionContainer .infoContainer .infoTitle {
					font-size: 2rem;
					font-weight: 400;
					padding-bottom: 1rem;
				}

				.easySectionContainer .pointsHolder .imageContainer img {
					height: 200px;
				}
			`}</style>
		</>
	)
}

export default Home
