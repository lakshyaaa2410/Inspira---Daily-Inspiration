import axios from "axios";
import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import FavoritesModal from "./components/FavoritesModal";

const buttonStyle =
	"px-8 py-2 border-2 border-black dark:border-white uppercase bg-white text-black dark:bg-black dark:text-white transition-transform duration-200 text-sm cursor-pointer focus:outline-none shadow-[1px_1px_0_rgba(0,0,0,1),2px_2px_0_rgba(0,0,0,1),3px_3px_0_rgba(0,0,0,1),4px_4px_0_rgba(0,0,0,1),5px_5px_0_rgba(0,0,0,1)] dark:shadow-[1px_1px_0_rgba(255,255,255,1),2px_2px_0_rgba(255,255,255,1),3px_3px_0_rgba(255,255,255,1),4px_4px_0_rgba(255,255,255,1),5px_5px_0_rgba(255,255,255,1)] hover:scale-105 focus:scale-105";

export default function App() {
	const [quote, setQuote] = useState(
		"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."
	);

	const [author, setAuthor] = useState("Martin Luther King Jr.");
	const [isRed, setIsRed] = useState(false);
	const [showFavroites, setShowFavroites] = useState(false);

	const quoteRef = useRef(null);

	async function getNewQuote() {
		try {
			const response = await axios.get("https://api.quotable.io/random");
			const { content, author } = response.data;

			setQuote(content);
			setAuthor(author);
		} catch (err) {
			setQuote(err.message);
			setAuthor("");
		} finally {
			setIsRed(false);
		}
	}

	function copyToClipboard() {
		navigator.clipboard.writeText(quoteRef.current.textContent);

		const range = document.createRange();
		range.selectNodeContents(quoteRef.current);

		const selection = window.getSelection();
		selection.addRange(range);
	}

	function listenQuote() {
		const utterance = new SpeechSynthesisUtterance(`${quote} by ${author}`);
		speechSynthesis.speak(utterance);
	}

	function addToFav() {
		let quotes = JSON.parse(localStorage.getItem("quotes")) || [];
		if (!isRed) {
			quotes.push(quote);
			localStorage.setItem("quotes", JSON.stringify(quotes));

			toast("Added To Favourites", {
				icon: "❤️",
				position: "bottom-center",
				style: {
					marginBottom: "15px",
				},
			});
		} else {
			quotes = quotes.filter((q) => q !== quote);
			localStorage.setItem("quotes", JSON.stringify(quotes));

			toast("Removed From Favourites", {
				icon: "💔",
				position: "bottom-center",
				style: { marginBottom: "15px" },
			});
		}

		setIsRed(!isRed);
	}

	function handleClearFavroites() {
		localStorage.removeItem("quotes");
		setIsRed(false);
		toast.success("Cleard All Favroites", {
			position: "bottom-center",
			style: {
				marginBottom: "15px",
			},
		});
	}

	return (
		<div className="bg-amber-200 flex flex-col justify-center items-center text-center min-h-screen">
			<div>
				<Toaster />
			</div>
			<h1 className="text-4xl font-serif">
				<span className="italic font-semibold">Inspira</span> - Your
				Spark Of Inspiration
			</h1>

			<div className="relative max-w-lg mt-6 border-2 py-10 px-4 rounded-2xl shadow-md">
				<p
					className="italic"
					style={{ fontSize: "17px" }}
					ref={quoteRef}
				>
					{quote}
				</p>

				<p className="mt-2 text-sm font-semibold text-gray-600">
					— {author}
				</p>

				<span className="absolute bottom-3 right-3 cursor-pointer transition">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill={isRed ? "red" : "none"}
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
						onClick={addToFav}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
						/>
					</svg>
				</span>
			</div>

			<div className="mt-6 flex space-x-4">
				<button className={`${buttonStyle}`} onClick={getNewQuote}>
					New Quote
				</button>
				<button className={`${buttonStyle}`} onClick={copyToClipboard}>
					Copy Quote
				</button>
				<button className={`${buttonStyle}`} onClick={listenQuote}>
					Listen
				</button>{" "}
				<button
					className={`${buttonStyle}`}
					onClick={() => setShowFavroites(!showFavroites)}
				>
					Favroites
				</button>
			</div>

			{showFavroites && (
				<FavoritesModal
					data={JSON.parse(localStorage.getItem("quotes")) || []}
					onModalClose={() => setShowFavroites(false)}
					onClearAll={handleClearFavroites}
				/>
			)}
		</div>
	);
}
