function deg2rad(deg: number) {
  return deg * (Math.PI/180)
}

type Point = {
    lat: number;
    lng: number;
}
export const distanceFromLatLng = (a: Point, b: Point) => {
  const { lat: lat1, lng: lng1 } = a;
  const { lat: lat2, lng: lng2 } = b;
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2-lat1);  // deg2rad below
  const dLon = deg2rad(lng2-lng1); 
  const aa = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  const c = 2 * Math.atan2(Math.sqrt(aa), Math.sqrt(1-aa)); 
  const d = R * c; // Distance in km
  return d;
}