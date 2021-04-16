type JwtObject = {
  [key: string]: string | number;
};

function decodeJwt(token: string): JwtObject {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const buff = new Buffer(base64, 'base64');
  const payloadinit = buff.toString('ascii');

  return JSON.parse(payloadinit);
}

export default decodeJwt;
