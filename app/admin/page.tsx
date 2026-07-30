import { products } from "@/data/products";
import { siteConfig } from "@/config/site";

const stats = [
  { label: "Total Listings", value: products.length },
  { label: "New This Week", value: products.filter((p) => p.isNew).length },
  { label: "Featured", value: products.filter((p) => p.featured).length },
  { label: "Avg. Price", value: `${siteConfig.currency}${Math.round(products.reduce((s, p) => s + p.price, 0) / products.length)}` },
];

export default function AdminPage() {
  return (
    <div className="container-px py-10 lg:py-16">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
        <div>
          <p className="eyebrow-tag text-xs text-clay mb-2">Internal</p>
          <h1 className="font-display text-3xl sm:text-4xl">Admin Dashboard</h1>
        </div>
        <span className="text-xs eyebrow-tag border border-dashed border-ink/30 dark:border-bone/30 rounded-tag px-3 py-1.5 text-ink/50 dark:text-bone/50">
          Placeholder — not wired to a backend
        </span>
      </div>
      <p className="text-ink/55 dark:text-bone/55 mb-10 max-w-lg">
        This is a static preview of what an inventory dashboard could look like. Connect it to a
        real database or headless commerce backend (e.g. Shopify, Medusa, or a custom API) to make
        it functional.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="bg-sand/50 dark:bg-moss-soft/60 rounded-tag p-5">
            <p className="text-xs eyebrow-tag text-ink/50 dark:text-bone/50">{s.label}</p>
            <p className="font-display text-3xl mt-2">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-sand/40 dark:bg-moss-soft/50 rounded-tag overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-ink/10 dark:border-bone/10">
          <h2 className="font-medium">Inventory</h2>
          <button className="text-xs btn-secondary py-2 px-4" disabled>
            + Add Listing
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs eyebrow-tag text-ink/45 dark:text-bone/45 border-b border-ink/10 dark:border-bone/10">
                <th className="px-5 py-3">Lot</th>
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Brand</th>
                <th className="px-5 py-3">Size</th>
                <th className="px-5 py-3">Condition</th>
                <th className="px-5 py-3">Price</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b border-ink/5 dark:border-bone/5 hover:bg-bone/50 dark:hover:bg-moss/40">
                  <td className="px-5 py-3 font-tag text-xs">{p.lot}</td>
                  <td className="px-5 py-3">{p.name}</td>
                  <td className="px-5 py-3 text-ink/60 dark:text-bone/60">{p.brand}</td>
                  <td className="px-5 py-3">{p.size}</td>
                  <td className="px-5 py-3">{p.condition}</td>
                  <td className="px-5 py-3 font-tag">{siteConfig.currency}{p.price}</td>
                  <td className="px-5 py-3">
                    <span className="text-xs bg-sage/20 text-sage-dark dark:text-sage-light px-2 py-1 rounded-tag">
                      In Stock
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
