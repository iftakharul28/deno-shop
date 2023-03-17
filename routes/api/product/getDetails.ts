import { HandlerContext } from "$fresh/server.ts";
import { ProductDetailsType } from "../../../types/index.ts";
export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
) => {
  const u = new URL(_req.url);
  const res = await fetch(
    `${Deno.env.get("API_URL")}/product/details?product_code=${
      u.searchParams.get("slug")
    }&source=1688`,
    {
      headers: {
        Origin: "https://wholesalecart.com",
      },
    },
  );
  const data: { data: ProductDetailsType } = await res.json();
  return Response.json(data.data);
};
