export default {
  meEndpoint: "/auth/me",
  loginEndpoint: "/auth/login",
  registerEndpoint: "/user/register",
  storageTokenKeyName: "accessToken",
  onTokenExpiration: "refreshToken", // logout | refreshToken
};
