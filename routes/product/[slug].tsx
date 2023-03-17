import { ProductDetailsType } from "../../types/index.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Http from "../../lib/http.ts";
export const handler: Handlers<ProductDetailsType | null> = {
  async GET(_, ctx) {
    const { slug } = ctx.params;
    const resp = await Http.Get(`product/getDetails?slug=${slug}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const data: ProductDetailsType = await resp.json();
    return ctx.render(data);
  },
};
export default function Greet({ data }: PageProps<ProductDetailsType | null>) {
  if (!data) {
    return <h1>Data not found</h1>;
  }
  return (
    <section>
      <h1>{data?.title}</h1>
    </section>
  );
}
