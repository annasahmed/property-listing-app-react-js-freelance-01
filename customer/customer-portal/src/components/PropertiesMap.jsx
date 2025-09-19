// src/components/PropertiesMap.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix Leaflet default icon issue
import "leaflet/dist/leaflet.css";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
	iconUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
	shadowUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// ✅ Property data (from screenshot)
const properties = [
	{ id: 1, name: "Al Dhawahi", position: [26.326, 50.105] },
	{ id: 2, name: "Retal Square", position: [26.283, 50.2] },
	{ id: 3, name: "Nesaj Lazurd", position: [26.24, 50.13] },
	{ id: 4, name: "Al Nawras", position: [26.25, 50.14] },
	{ id: 5, name: "Nesaj Al Khobar", position: [26.2, 50.17] },
];

const PropertiesMap = () => {
	return (
		<div className="w-full h-[600px] max-md:h-[500px] rounded-xl overflow-hidden">
			<MapContainer
				center={[26.28, 50.15]} // Center Khobar/Dhahran
				zoom={11}
				className="h-full w-full">
				{/* Base Map */}
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				/>

				{/* Markers */}
				{properties.map((p) => (
					<Marker key={p.id} position={p.position}>
						<Popup>
							<div className="font-semibold">{p.name}</div>
						</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
};

export default PropertiesMap;
