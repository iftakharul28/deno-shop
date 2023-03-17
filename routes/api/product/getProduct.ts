import { HandlerContext } from "$fresh/server.ts";
export const handler = async (_req: Request, _ctx: HandlerContext) => {
  const res = await fetch(
    `${Deno.env.get("API_URL")}/product/all/?page=1`,
    {
      headers: {
        Origin: "https://wholesalecart.com",
      },
    },
  );
  const data = await res.json();
  return Response.json(data);
};
