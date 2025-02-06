let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  backendHost = "http://localhost:8080";
}
else{
  backendHost = "https://api.mayfifth99.store";
}

export const API_BASE_URL = `${backendHost}`;
