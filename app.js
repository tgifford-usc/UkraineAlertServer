import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Ukraine Alerts API
const apiBase = "https://api.ukrainealarm.com/api/v3/";
const alertsEndpoint = "alerts";


app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});


app.get("/status", (request, response) => {
    const status = {
       "Status": "Running"
    };    
    response.send(status);
});


app.get("/alerts", async (request, response) => {
    try {
      const url = `${apiBase}${alertsEndpoint}`;
      const apiResponse = await fetch(url, {
        headers: {
          Accept: "application/json",
          Authorization: request.query["token"]
        }
      });
      const alerts = await apiResponse.json();
      response.send(alerts);
    } catch(err) {
      console.log("Error processing alerts request: ", err);
    }
});