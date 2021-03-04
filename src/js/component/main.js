import React from "react";

import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";

export function Main() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
			</div>
			<div className="container">
				<div className="row align-items-start">
					<div className="col">
						<Card />
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col">
						<Card />
					</div>
				</div>
				<div className="row align-items-end">
					<div className="col">
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
}
