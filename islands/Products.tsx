import { ProductPropsType } from "../types/index.ts";

export default function Products(
  { products }: { products: ProductPropsType | null },
) {
  return (
    <div class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      {products?.data.map((
        { name, product_code, total_sold, regular_price, sale_price, img },
        id,
      ) => (
        <a href={`/product/${product_code}`} class="p-4 border" key={id}>
          <img src={img} alt={name} />
          <p class="text-sm font-medium max-h-5 overflow-hidden">{name}</p>
          <div class="flex justify-between">
            {regular_price != 0 ? <p>{regular_price}</p> : <p>{sale_price}</p>}
            <p>{total_sold}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
