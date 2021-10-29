import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const Home: NextPage = () => {
	return (
		<>
			<div className="footer">
				<div className="buttonsContainer">
					<a href="#">
						<button>
							<img src="/code.svg" alt="developer" />
							<span>For Developers</span>
						</button>
					</a>
					<a href="#">
						<button>
							<img src="/user.svg" alt="user" />
							<span>For Users</span>
						</button>
					</a>
					<a href="#">
						<button>
							<img src="/github.svg" alt="open sourced" />
							<span> Open Sourced on Github </span>
						</button>
					</a>
				</div>
			</div>

			<style jsx>{`
				.footer {
					background-color: #4285f4;
					padding: 5vh 0;
				}

				.buttonsContainer {
					max-width: 800px;
					margin: 0 auto;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-evenly;
					gap: 10px;
				}

				.buttonsContainer a {
					text-decoration: none;
				}

				.buttonsContainer button {
					font-size: 1.2rem;
					cursor: pointer;
					font-weight: 500;
					padding: 8px;
					border-radius: 5px;
					border: 0;
					color: #000;
					display: flex;
					align-items: center;
					gap: 10px;
				}

				.buttonsContainer img {
					height: 1.2rem;
				}
			`}</style>
		</>
	)
}

export default Home
