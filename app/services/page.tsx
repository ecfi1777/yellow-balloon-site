// app/services/page.tsx

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Services & Pricing</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left border-b">Service</th>
              <th className="px-4 py-2 text-left border-b">Price</th>
              <th className="px-4 py-2 text-left border-b">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b">Baby’s First Haircut (Newborn–12 mo.)</td><td className="px-4 py-2 border-b">$30</td><td className="px-4 py-2 border-b">Includes certificate & keepsake lock (optional)</td></tr>
            <tr><td className="px-4 py-2 border-b">Boys Haircut (Under 11)</td><td className="px-4 py-2 border-b">$30–$33</td><td className="px-4 py-2 border-b"></td></tr>
            <tr><td className="px-4 py-2 border-b">Boys Haircut (11–17)</td><td className="px-4 py-2 border-b">$30–$35</td><td className="px-4 py-2 border-b"></td></tr>
            <tr><td className="px-4 py-2 border-b">Girls Haircut (Under 11)</td><td className="px-4 py-2 border-b">$35–$45</td><td className="px-4 py-2 border-b"></td></tr>
            <tr><td className="px-4 py-2 border-b">Girls Haircut (11–17)</td><td className="px-4 py-2 border-b">$45–$55</td><td className="px-4 py-2 border-b"></td></tr>
            <tr><td className="px-4 py-2 border-b">Kids Bang Trim</td><td className="px-4 py-2 border-b">$15</td><td className="px-4 py-2 border-b"></td></tr>
            <tr><td className="px-4 py-2 border-b">Kids Shampoo</td><td className="px-4 py-2 border-b">$5</td><td className="px-4 py-2 border-b"></td></tr>
            <tr><td className="px-4 py-2 border-b">Kids Shampoo & Blow Out</td><td className="px-4 py-2 border-b">$20+</td><td className="px-4 py-2 border-b"></td></tr>
            <tr><td className="px-4 py-2 border-b">Kids Flat Iron</td><td className="px-4 py-2 border-b">$30+</td><td className="px-4 py-2 border-b"></td></tr>
            <tr><td className="px-4 py-2 border-b">Kids Fancy Up-Do</td><td className="px-4 py-2 border-b">$50</td><td className="px-4 py-2 border-b"></td></tr>
            <tr><td className="px-4 py-2 border-b">French Braid</td><td className="px-4 py-2 border-b">$15+</td><td className="px-4 py-2 border-b"></td></tr>
            <tr><td className="px-4 py-2 border-b">Corn Rows (Half Head)</td><td className="px-4 py-2 border-b">$35</td><td className="px-4 py-2 border-b"></td></tr>
            <tr><td className="px-4 py-2 border-b">Kids Nail Polish</td><td className="px-4 py-2 border-b">$15</td><td className="px-4 py-2 border-b"></td></tr>
            <tr><td className="px-4 py-2 border-b">Mom’s Haircut (no shampoo)</td><td className="px-4 py-2 border-b">$55+</td><td className="px-4 py-2 border-b"></td></tr>
            <tr><td className="px-4 py-2 border-b">Mom’s Shampoo & Blow Dry</td><td className="px-4 py-2 border-b">$40</td><td className="px-4 py-2 border-b"></td></tr>
            <tr><td className="px-4 py-2 border-b">Dad’s Haircut</td><td className="px-4 py-2 border-b">$36</td><td className="px-4 py-2 border-b"></td></tr>
            <tr><td className="px-4 py-2 border-b">Color</td><td className="px-4 py-2 border-b">$70+</td><td className="px-4 py-2 border-b"></td></tr>
            <tr><td className="px-4 py-2 border-b">Highlights (Kids)</td><td className="px-4 py-2 border-b">$60+</td><td className="px-4 py-2 border-b"></td></tr>
            <tr><td className="px-4 py-2 border-b">Highlights (Adults)</td><td className="px-4 py-2 border-b">$100+</td><td className="px-4 py-2 border-b"></td></tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        Shampoo is not included with haircuts. Prices may vary depending on hair length & thickness.
      </p>
    </main>
  );
}
