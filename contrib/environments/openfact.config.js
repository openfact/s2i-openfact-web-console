var config = {
  "auth-server-url": process.env.KEYCLOAK_URL,
  "realm": process.env.KEYCLOAK_REALM,
  "realm-public-key": process.env.KEYCLOAK_PUBLIC_KEY,
  "resource": process.env.KEYCLOAK_CLIENT_ID,
  "ssl-required": 'external',
  "public-client": true,
  "enable-cors": true
};

module.exports = config;
