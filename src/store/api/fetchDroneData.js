import "isomorphic-fetch";

const fetchDroneData = async (latitude, longitude) => {
  const latlon = [latitude, longitude].join(",");
  // Using the create-react-app's proxy for CORS issues
  const response = await fetch(
    `https://react-assessment-api.herokuapp.com/api/drone`
  );
  if (!response.ok) {
    return { error: { code: response.status } };
  }
  const json = await response.json();
  return { data: json };
};

export default fetchDroneData;
