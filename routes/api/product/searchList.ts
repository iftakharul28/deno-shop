import { HandlerContext } from "$fresh/server.ts";
import { SearchType } from "../../../types/index.ts";
export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
) => {
  const u = new URL(_req.url);
  const res = await fetch(
    `${Deno.env.get("API_URL")}/product/key-search?source=1688&key=${
      u.searchParams.get("slug")
    }&page=1`,
    {
      headers: {
        Origin: "https://wholesalecart.com",
      },
    },
  );
  const data: SearchType = await res.json();
  return Response.json(data);
};
