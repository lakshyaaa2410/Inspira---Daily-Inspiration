import React from "react";

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
				<button
					className={`my-2 ${import.meta.env.VITE_BUTTON_STYLE}`}
					onClick={onClearAll}
				>
					Clear All
				</button>
			</div>
		</div>
	);
}
