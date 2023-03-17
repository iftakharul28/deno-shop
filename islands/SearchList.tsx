import { useMemo, useState } from "preact/hooks";
import Http from "../lib/http.ts";
import { SearchType } from "../types/index.ts";
export default function SearchList({ name }: { name: string }) {
  const [data, setData] = useState<SearchType>();
  const getList = async (name: string) => {
    const resp = await Http.Get(`product/searchList?slug=${name}`);
    if (resp.status === 404) {
      return null;
    }
    const data = await resp.json();
    setData(data);
  };
  useMemo(() => {
    getList(name);
  }, [name]);
  return (
    <section>
      <h2 class="py-3 text-lg font-semibold text-capitalize">{data?.key}</h2>
      <div class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {data?.results.map((
          { img, product_code, name, sale_price, regular_price, total_sold },
          id,
        ) => (
          <a href={`/product/${product_code}`} class="p-4 border" key={id}>
            <img src={img} alt={name} />
            <p class="text-sm font-medium max-h-5 overflow-hidden">{name}</p>
            <div class="flex justify-between">
              {regular_price != 0
                ? <p>{regular_price}</p>
                : <p>{sale_price}</p>}
              <p>{total_sold}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
