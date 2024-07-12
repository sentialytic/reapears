import axios from "axios";

// ===== API Endpoint  impls =====

const env = import.meta.env;
const API_KEY = env.VITE_API_KEY;
const BASE_URL = env.VITE_SERVER_URL;

export const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${API_KEY}` },
});

/**
 *
 * @returns
 */
export function assetsUrl(path) {
  return `./assets/${path}`;
}

/**
 * Construct a url to the server api
 * @param {string} path url path and optional query parameters
 * @returns server(Reapears) api URL to the path provided
 */
export function endpointUrl(path) {
  const url = new URL(`${BASE_URL}${path}`);
  return url;
}

/**
 * Media routes on the server.
 */
export const MEDIA_URL = {
  harvest: (id) => endpointUrl(`harvests/p/${id}`),
  cultivar: (id) => endpointUrl(`cultivars/p/${id}`),
  user: (id) => endpointUrl(`/account/users/photo${id}`),
  farmLogo: (id) => endpointUrl(`/account/users/photo${id}`),
};

/**
 * Return harvest image url
 */
export function harvestImageResolver(name) {
  return MEDIA_URL["harvest"](name);
}

/**
 * Return user image url
 */
export function userPhotoResolver(name) {
  return MEDIA_URL["user"](name);
}

/**
 * Return farmLogo image url
 */
export function farmLogoResolver(name) {
  return MEDIA_URL["farmLogo"](name);
}

/**
 * Return cultivar image url
 */
export function cultivarImageResolver(name) {
  return MEDIA_URL["cultivar"](name);
}

/**
 *
 * Convert an object of filters into an url query string.
 * @param {object} filters
 * @returns url query string
 *
 *
 * Example:
 *
 * Input: {
 *  cultivar: ["tomatoes", "onion"],
 *  region: ["omusati", "ohangwena"],
 * }
 *
 * Output:  "cultivar=tomatoes&cultivar=onion&region=omusati&region=ohangwena"
 */
export function intoUrlQuery(filters) {
  if (!filters) {
    return "";
  }
  let query = "";
  for (let name in filters) {
    for (let value of filters[name]) {
      query += `${name}=${value}&`;
    }
  }
  // remove the ampersand(&) at the end
  return query.slice(0, query.length - 1);
}

// ===== /produce | /harvests API impls =====

export async function getHarvests(searchParams) {
  let query = intoUrlQuery(searchParams);
  query = query ? `?${query}` : "";
  return await httpClient.get(`produce${query}`);
}

export async function getHarvest(harvestId) {
  return await httpClient.get(`harvests/${harvestId}`);
}

export async function postHarvest(harvest) {
  return await httpClient.post(`harvests`, harvest);
}

export async function putHarvest(harvest, harvestId) {
  return await httpClient.put(`harvests/${harvestId}`, harvest);
}

export async function deleteHarvest(harvestId) {
  return await httpClient.delete(`harvests/${harvestId}`);
}

export async function deleteHarvestImages(harvestId) {
  return await httpClient.delete(`harvests/${harvestId}/photos`);
}

// ====== /cultivars API impls =====

export async function getCultivarIndex() {
  return await httpClient.get(`cultivars/index`);
}

// ====== /locations API impls =====

export async function postLocation(location) {
  return await httpClient.post(`locations`, location);
}

export async function putLocation(location, locationId) {
  return await httpClient.put(`locations/${locationId}`, location);
}

export async function deleteLocation(locationId) {
  const response = await httpClient.delete(`locations/${locationId}`);
  return response;
}

export async function getCountries() {
  return await httpClient.get(`locations/countries`);
}

export async function getRegions(countryId) {
  return await httpClient.get(`locations/countries/${countryId}/regions`);
}

// ====== /farms API impls =====

export async function getFarm(farmId) {
  return await httpClient.get(`farms/${farmId}`);
}

export async function postFarm(farm) {
  return await httpClient.post(`farms`, farm);
}

export async function putFarm(farm, farmId) {
  return await httpClient.put(`farms/${farmId}`, farm);
}

export async function deleteFarm(farmId) {
  return await httpClient.delete(`farms/${farmId}`);
}

export async function deleteFarmLogo(farmId) {
  return await httpClient.delete(`farms/${farmId}/logo`);
}

// ===== /accounts API impls =====

export async function signUp(userInfo) {
  return await httpClient.post(`account/signup`, userInfo);
}

export async function login(userInfo) {
  return await httpClient.post(`account/login`, userInfo);
}

export async function logout() {
  return await httpClient.delete(`account/logout`);
}

export async function accountConfirm(token) {
  return await httpClient.get(`account/confirm?${token}`);
}

export async function accountExists(email) {
  return await httpClient.post(`account/email-exists`, email);
}

export async function getUserProfile(userId) {
  return await httpClient.get(`account/users/${userId}/profile`);
}

export async function getUserMyProfile() {
  return await httpClient.get(`account/users/profile`);
}

export async function putUserProfile(userProfile) {
  return await httpClient.put(`/account/users/profile`, userProfile);
}

export async function getUserPersonalInfo() {
  return await httpClient.get(`/account/settings/personal-info`);
}

export async function putPersonalInfo(personalInfo) {
  return await httpClient.put(`account/settings/personal-info`, personalInfo);
}

export async function passwordForgot(userInfo) {
  return await httpClient.post(`account/forgot-password`, userInfo);
}

export async function passwordReset(userInfo) {
  return await httpClient.post(`account/reset-password`, userInfo);
}

// const fetchUser = async () => {
// const { data } = await httpClient.get(
//   `https://jsonplaceholder.typicode.com/users/1`
// );
// return data;
// };
// const {
//        isLoading,
//        isSuccess,
//        error,
//        isError,
//        data: userData
//     } = useQuery("user",fetchUser);

// <div>
//   {isLoading && <article>...Loading user </article>}
//   {isError && <article>{error.message}</article>}
//   {isSuccess && (
//     <article>
//       <p>Username: {userData.username}</p>
//     </article>
//   )}
// </div>

// const params = useParams(), useNavigate(), useSearchParams() react-router-dom

// depedancy
// const { data: user } = useQuery(['user', email], getUserByEmail)

// const userId = user?.id

// // Then get the user's projects
// const { isIdle, data: projects } = useQuery(
//   ['projects', userId],
//   getProjectsByUser,
//   {
//     // The query will not execute until the userId exists
//     enabled: !!userId,
//   }
// )
