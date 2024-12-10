import { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import ColorPalette from "./components/ColorPalette";
import FavoritePalettes from "./components/FavoritePalettes";

const moodPalettes = {
	Happy: ["#FFD700", "#FFEC8B", "#FFF68F"],
	Calm: ["#87CEEB", "#4682B4", "#B0E0E6"],
	Energetic: ["#FF4500", "#FF6347", "#FF7F50"],
};

function App() {
	const [selectedMood, setSelectedMood] = useState(null);
	const [favorites, setFavorites] = useState([]);

	const handleCopy = (color) => {
		navigator.clipboard.writeText(color);
		alert(`Copied ${color} to clipboard!`);
	};

	const handleSave = () => {
		if (selectedMood) {
			setFavorites([...favorites, moodPalettes[selectedMood]]);
		}
	};

	const handleRemove = (index) => {
		setFavorites(favorites.filter((_, i) => i !== index));
	};

	return (
		<div className="min-h-screen bg-gray-900 bg-opacity-60 backdrop-blur-md bg flex justify-center p-6">
			<div className="w-full max-w-6xl bg-white bg-opacity-10 rounded-lg shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="bg-gray-800 bg-opacity-80 rounded-lg shadow p-6 flex flex-col justify-between">
					<h2 className="text-2xl font-bold text-white mb-4 text-center">
						Mood Color Palette Generator
					</h2>

					<MoodSelector
						moods={Object.keys(moodPalettes)}
						onSelectMood={setSelectedMood}
					/>

					{selectedMood && (
						<ColorPalette
							palette={moodPalettes[selectedMood]}
							onCopy={handleCopy}
						/>
					)}
					<button
						onClick={handleSave}
						disabled={!selectedMood}
						className="block bg-green-500 text-white px-4 py-2 rounded shadow mx-auto mt-4 hover:bg-green-600 transition"
					>
						Save Palette
					</button>
				</div>

				<div className="bg-gray-800 bg-opacity-80 rounded-lg shadow p-6 flex flex-col">
					<h2 className="text-xl font-bold text-white mb-4 text-center">
						Favorite Palettes
					</h2>
					{favorites.length > 0 ? (
						<FavoritePalettes favorites={favorites} onRemove={handleRemove} />
					) : (
						<p className="text-gray-400 text-center">
							No favorite palettes saved yet. Add some!
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
