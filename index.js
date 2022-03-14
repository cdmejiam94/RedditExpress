import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import routerApi from "./routes/index.js";
const app = express();

// Configuring Express
app.use(express.json());
app.use(bodyParser.json())
app.use(cors());

//Creating endpoints
routerApi(app)

app.get('/', (req, res) => {
    res.send('oli k ase!')
})

const PORT = 3003;

// Listen for URIs on a port
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
