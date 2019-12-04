import React, { useState } from "react";
import Skill from "./components/Skill";

const App = () => {
	const starterKit = [{ name: 'Lumber', quantity: 1 }]
	const baseStats = {
		exp: 0,
		level: 1
	}

	const [inventory, setInventory] = useState(starterKit)
	const [woodcutting, setWoodcutting] = useState(baseStats)
	const [mining, setMining] = useState(baseStats)

	const levelMarks = [4, 12, 24, 48, 75, 125, 175, 225, 300, 375, 500]

	const chopWood = () => {
		if (levelMarks.includes(woodcutting.exp + 1)) {
			setWoodcutting({ exp: woodcutting.exp + 1, level: woodcutting.level + 1 })
		} else {
			setWoodcutting({ exp: woodcutting.exp + 1, level: woodcutting.level })
		}
	}

	const mineOre = () => {
		if (levelMarks.includes(mining.exp + 1)) {
			setMining({ exp: mining.exp + 1, level: mining.level + 1 })
		} else {
			setMining({ exp: mining.exp + 1, level: mining.level })
		}
	}

	return (
		<div>
			<Skill takeAction={chopWood} skill={woodcutting} skillName={"Woodcutting"} skillAction={"Chop Wood"} />
			<Skill takeAction={mineOre} skill={mining} skillName={"Mining"} skillAction={"Mine Ore"} />
		</div>
	);
};

export default App;
