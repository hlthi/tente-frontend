export function getDeviceBasedRouteLink(lat: string, lng: string)  : string{
  const isMacLike = window.navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
  if (isMacLike) {
    return `maps://maps.apple.com/maps?daddr=${lat},
      ${lng}`;
  }
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},
      ${lng}`;
}
