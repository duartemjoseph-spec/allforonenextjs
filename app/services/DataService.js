const API_BASE =
  "https://allforoneapijd-dddzcffddga4hed2.westus3-01.azurewebsites.net";

export async function handleCall(path) {
  const res = await fetch(API_BASE + path);
  return await res.text();
}