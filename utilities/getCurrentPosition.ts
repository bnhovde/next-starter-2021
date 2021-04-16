const search = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 });
  });
};

const getCurrentPosition = async (): Promise<GeolocationPosition> => {
  const position = await search();
  return position;
};

export default getCurrentPosition;
