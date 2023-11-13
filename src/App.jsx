import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { Pincode } from "./components/Pincode";
import { LocationInfo } from "./components/LocationInfo";
import { FetchWrapper } from "./utils/fetchWrapper";
import { Loader } from "./components/Loader";
import { ServerError } from "./components/ServerError";
import { NotFound } from "./components/NotFound";
import { AllCards } from "./components/AllCards";
const App = () => {
  const [location, setLocation] = useState(null);
  const [allPlaces, setAllPlaces] = useState([]);
  const [abbreviations, setAbbrevations] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isServerError, setIsServerError] = useState(false);

  const API = new FetchWrapper(process.env.REACT_APP_API_URL);
  const fetchLocationInfo = async (postalCode) => {
    setLoading(true);
    try {
      const response = await API.get(postalCode);
      if (response.ok) {
        const data = await response.json();
        const placeName = data?.places[0]["place name"] ?? "NA";
        const state = data?.places?.[0]?.["state"] ?? "NA";
        const country = data?.country ?? "NA";
        const countryAbb = data?.["country abbreviation"] ?? "NA";
        const stateAbb = data.places?.[0]["state abbreviation"] ?? "NA";
        setIsNotFound(false);
        setLocation({ placeName, state, country });
        setAbbrevations({ countryAbb, stateAbb });
        setAllPlaces([...data.places]);
        setError(null);
      } else if (response.status === 404) {
        setIsNotFound(true);
        setLocation(null);
        setAbbrevations({});
        setAllPlaces([]);
      } else {
        setIsNotFound(false);
        setIsServerError(true);
        setLocation(null);
        setAbbrevations({});
        setAllPlaces([]);
      }
    } catch (err) {
      setLocation(null);
      setAbbrevations({});
      setAllPlaces([]);
      setError("Error fetching location information. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setLocation(null);
    setAllPlaces([]);
    setError(null);
  };
  return isServerError ? (
    <ServerError />
  ) : (
    <Box pt={10} w={"100%"} textAlign={"center"}>
      <Pincode fetchLocationInfo={fetchLocationInfo} isLoading={loading} />
      {loading ? (
        <Loader />
      ) : isNotFound ? (
        <NotFound />
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        location && (
          <Box w={"100%"} border={"0px solid"}>
            <LocationInfo location={location} />
            <AllCards allPlaces={allPlaces} stateAndCountry={abbreviations} />
            <Button mt={3} colorScheme="red" onClick={handleClear}>
              Clear Data
            </Button>
          </Box>
        )
      )}
    </Box>
  );
};

export default App;
