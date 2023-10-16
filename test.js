import fetch from 'node-fetch';

// Ukraine Alerts API
const token = "replace-with-api-key";
const apiBase = "https://api.ukrainealarm.com/api/v3/";
const alertsEndpoint = "alerts";


const testFunction = async () => {
    const url = `${apiBase}${alertsEndpoint}`;
    const apiResponse = await fetch("https://api.ukrainealarm.com/api/v3/alerts", {
        headers: {
          Accept: "application/json",
          Authorization: token
        }
      });
    const msg = await apiResponse.json();
    console.log(msg);
};

testFunction();
