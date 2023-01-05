const fs = require("fs");
const path = require("path");

module.exports.config = function(src="./.env") {
	const file = fs.readFileSync(src, "utf-8");
	const rows = file.split("\n");
	for (const row of rows) {
		if (row.startsWith("#")) continue;
		if (!row.length) continue;

		const [key, value] = row.split("=");

		process.env[key] = value;
	};
};
