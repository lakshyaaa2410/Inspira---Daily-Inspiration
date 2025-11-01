import React from "react";

const buttonStyle =
	"px-8 py-2 border-2 border-black dark:border-white uppercase bg-white text-black dark:bg-black dark:text-white transition-transform duration-200 text-sm cursor-pointer focus:outline-none shadow-[1px_1px_0_rgba(0,0,0,1),2px_2px_0_rgba(0,0,0,1),3px_3px_0_rgba(0,0,0,1),4px_4px_0_rgba(0,0,0,1),5px_5px_0_rgba(0,0,0,1)] dark:shadow-[1px_1px_0_rgba(255,255,255,1),2px_2px_0_rgba(255,255,255,1),3px_3px_0_rgba(255,255,255,1),4px_4px_0_rgba(255,255,255,1),5px_5px_0_rgba(255,255,255,1)] hover:scale-105 focus:scale-105";

export default function FavoritesModal({ data, onModalClose, onClearAll }) {
	return (
		<div className="fixed inset-0 bg-amber-200 bg-opacity-10 flex justify-center items-center z-50">
			<div className="bg-amber-50 p-4 rounded-xl w-[90%] max-w-lvh relative max-h-[90vh] overflow-hidden">
				<button
					className="absolute top-4 right-4 text-gray-600 text-sm cursor-pointer"
					onClick={onModalClose}
				>
					❌
				</button>
				<h1 className="text-3xl font-serif py-1">Your Favroites ❤️</h1>

				{data && data.length > 0 ? (
					<div className="overflow-y-auto space-y-3 px-10 my-4 max-h-[60vh]">
						{data.map((quote, index) => (
							<p
								key={index}
								className="bg-amber-100 italic px-3 py-3 text-gray-800 rounded-2xl shadow-sm border-black border"
								style={{ fontSize: "17px" }}
							>
								{quote}
							</p>
						))}
					</div>
				) : (
					<div className="text-1xl italic px-3 py-6 text-gray-800 ">
						No Favorite Quotes Yet
					</div>
				)}
				<button className={`my-2 ${buttonStyle}`} onClick={onClearAll}>
					Clear All
				</button>
			</div>
		</div>
	);
}
