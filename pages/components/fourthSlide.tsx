import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const Home: NextPage = () => {
	return (
		<>
			<div className="faqs">
				<div className="faqContainer">
					<div className="faqHeading">FAQs</div>
					<div className="faqsHolder">
						<div className="faq">
							<div className="faqTitle">
								<span>
									How Fire Authentication is private?{" "}
								</span>
							</div>
							<div className="faqContent">
								<span>
									Fire only generates a token and sends it to
									your website. And only your website can
									access the token and get your data. Fire
									does not collect any data from your users
									unlike the "telemetry" data by other
									services. You can always be sure that your
									data stays with you and what you do online
									is known by you alone.
								</span>
							</div>
						</div>
						<div className="faq">
							<div className="faqTitle">
								<span>How Fire works? </span>
							</div>
							<div className="faqContent">
								<span>
									You, as a user, will generate a token by
									scanning a QR or clicking on an authorize
									link. Your token will be sent to the client
									website through web sockets. And only the
									website generated the QR or the link can
									access. Your device will generate only with
									an id which refers your account containing
									only your name and email so you can stay
									private.
								</span>
							</div>
						</div>
						<div className="faq">
							<div className="faqTitle">
								<span>
									How it is easy for developers to use Fire?
								</span>
							</div>
							<div className="faqContent">
								<span>
									Developers have to do only one thing, they
									have to register for an API key and paste it
									inside a file which should be in the root of
									your project. And in your login page, using
									the
									<a href="https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API">
										Broadcast Channel API
									</a>
									, you can get the token after which you will
									need to send it to Fire to get the users'
									data.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.faqs {
					background-color: #171a1c;
					color: #e3e6e8;
				}

				.faqContainer {
					max-width: 1110px;
					margin: 0 auto;
					display: flex;
					flex-direction: column;
				}

				.faqHeading {
					font-size: 1.6rem;
					line-height: 1.6rem;
					font-weight: 500;
					margin-bottom: 2.4225rem;
					padding: 10px 5%;
				}

				.faqsHolder {
					display: flex;
					gap: 1.14rem;
					justify-content: space-evenly;
				}

				.faq {
					background-color: #1e2224;
					padding: 38.76px;
					width: 280px;
					display: flex;
					flex-direction: column;
					background-origin: padding-box;
					border-radius: 16px;
					font-size: 1.0625rem;
				}

				.faq .faqTitle span {
					line-height: 25px;
					text-align: left;
				}

				.faq .faqContent {
					margin-block-start: 17px;
					line-height: 25px;
				}

				.faq a {
					color: #7baff3;
				}

				@media (max-width: 69.3125em) {
					.faqsHolder {
						display: flex;
						flex-direction: column;
					}

					.faqsHolder .faq {
						width: 75%;
						margin: 0 auto;
						margin-bottom: 1rem;
					}
				}
			`}</style>
		</>
	)
}

export default Home
