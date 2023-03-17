import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import Http from "../lib/http.ts";
import type { ProductPropsType, SearchType } from "../types/index.ts";
import Products from "../islands/Products.tsx";
import SearchList from "../islands/SearchList.tsx";
export const handler: Handlers<ProductPropsType | null> = {
  async GET(_, ctx) {
    const res = await Http.Get(`product/getProduct`);
    if (res.status === 404) {
      return ctx.render(null);
    }
    const data: ProductPropsType = await res.json();
    return ctx.render(data);
  },
};
export default function Home(
  { data }: PageProps<ProductPropsType | null>,
) {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto container">
        {[{ name: "watch", id: 1 }, { name: "jewellery", id: 2 }].map((
          { name, id },
        ) => <SearchList name={name} key={id} />)}
        <Products products={data} />
        {/* <Counter start={3} /> */}
      </div>
    </>
  );
}
