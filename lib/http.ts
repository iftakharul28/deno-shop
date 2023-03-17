const baseUrl = "https://deno-fresh-shop.deno.dev";
export const Get = async (
  path: string,
) => {
  const response = await fetch(`${baseUrl}/api/${path}`, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
  return response;
};
export const Post = async (path: string, body?: BodyInit | null) => {
  const response = await fetch(`${baseUrl}/api/${path}`, {
    method: "POST",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
    body: body,
  });
  return response;
};
const Http = {
  Post,
  Get,
};

export default Http;
