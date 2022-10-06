npm init npm install express npm install typescript ts-node-dev @types/express --save-dev npm i tsc-init tsc --init mkdir src cd src touch server.ts " import express from "express"; const app = express();

app.listen(3000, () => console.log("Server is runnin localhost:3000")); " in package.json " "scripts": { "dev": "ts-node-dev --transpile-only src/server.ts" }, " cd .. touch .gitignore " nodemodules "
