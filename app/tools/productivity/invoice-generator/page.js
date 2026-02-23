"use client";

import { useState, useEffect } from "react";

export default function InvoiceGenerator() {
  const [logo, setLogo] = useState(null);

  const [company, setCompany] = useState({
    name: "",
    ntn: "",
    address: "",
    email: "",
  });

  const [client, setClient] = useState({
    name: "",
    ntn: "",
    address: "",
  });

  const [meta, setMeta] = useState({
    invoiceNo: "",
    currency: "PKR",
    date: "",
    dueDate: "",
    taxRate: 0,
  });

  const [items, setItems] = useState([
    { description: "", qty: 1, rate: 0 },
  ]);

  /* ✅ Hydration-safe invoice number */
  useEffect(() => {
    setMeta((prev) => ({
      ...prev,
      invoiceNo: `INV-${Date.now().toString().slice(-6)}`,
    }));
  }, []);

  const addItem = () => {
    setItems([...items, { description: "", qty: 1, rate: 0 }]);
  };

  const updateItem = (index, field, value) => {
    const copy = [...items];
    copy[index][field] = value;
    setItems(copy);
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.qty * item.rate,
    0
  );
  const tax = (subtotal * meta.taxRate) / 100;
  const total = subtotal + tax;

  return (
    <div className="max-w-7xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">
        Invoice Generator{" "}
        <span className="text-purple-600 text-sm">(Premium)</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT FORM */}
        <div className="space-y-6">
          {/* LOGO */}
          <section>
            <label className="font-semibold block mb-1">
              Company Logo (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                e.target.files &&
                setLogo(URL.createObjectURL(e.target.files[0]))
              }
            />
          </section>

          {/* COMPANY */}
          <section>
            <h2 className="font-semibold mb-2">Your Company</h2>
            <input
              className="input"
              placeholder="Company Name"
              onChange={(e) =>
                setCompany({ ...company, name: e.target.value })
              }
            />
            <input
              className="input"
              placeholder="NTN / GST"
              onChange={(e) =>
                setCompany({ ...company, ntn: e.target.value })
              }
            />
            <textarea
              className="input"
              placeholder="Company Address"
              onChange={(e) =>
                setCompany({ ...company, address: e.target.value })
              }
            />
            <input
              className="input"
              placeholder="Email / Phone"
              onChange={(e) =>
                setCompany({ ...company, email: e.target.value })
              }
            />
          </section>

          {/* CLIENT */}
          <section>
            <h2 className="font-semibold mb-2">Bill To</h2>
            <input
              className="input"
              placeholder="Client Name"
              onChange={(e) =>
                setClient({ ...client, name: e.target.value })
              }
            />
            <input
              className="input"
              placeholder="Client NTN (optional)"
              onChange={(e) =>
                setClient({ ...client, ntn: e.target.value })
              }
            />
            <textarea
              className="input"
              placeholder="Client Address"
              onChange={(e) =>
                setClient({ ...client, address: e.target.value })
              }
            />
          </section>

          {/* META */}
          <section className="grid grid-cols-2 gap-4">
            <input className="input" value={meta.invoiceNo} disabled />
            <select
              className="input"
              onChange={(e) =>
                setMeta({ ...meta, currency: e.target.value })
              }
            >
              <option>PKR</option>
              <option>USD</option>
              <option>AED</option>
              <option>EUR</option>
            </select>
            <input
              type="date"
              className="input"
              onChange={(e) =>
                setMeta({ ...meta, date: e.target.value })
              }
            />
            <input
              type="date"
              className="input"
              onChange={(e) =>
                setMeta({ ...meta, dueDate: e.target.value })
              }
            />
          </section>

          {/* ITEMS */}
          <section>
            <h2 className="font-semibold mb-2">Invoice Items</h2>
            {items.map((item, i) => (
              <div key={i} className="grid grid-cols-4 gap-2 mb-2">
                <input
                  className="input col-span-2"
                  placeholder="Description"
                  onChange={(e) =>
                    updateItem(i, "description", e.target.value)
                  }
                />
                <input
                  type="number"
                  className="input"
                  placeholder="Qty"
                  onChange={(e) =>
                    updateItem(i, "qty", Number(e.target.value))
                  }
                />
                <input
                  type="number"
                  className="input"
                  placeholder="Rate"
                  onChange={(e) =>
                    updateItem(i, "rate", Number(e.target.value))
                  }
                />
              </div>
            ))}
            <button
              onClick={addItem}
              className="text-blue-600 text-sm mt-1"
            >
              + Add Item
            </button>
          </section>

          {/* TAX */}
          <input
            type="number"
            className="input"
            placeholder="Tax % (e.g. 17)"
            onChange={(e) =>
              setMeta({ ...meta, taxRate: Number(e.target.value) })
            }
          />
        </div>

        {/* RIGHT PREVIEW */}
        <div className="border rounded-xl p-8 bg-gray-50">
          {logo && <img src={logo} className="h-14 mb-4" />}

          <div className="flex justify-between mb-4">
            <div>
              <p className="font-bold">{company.name}</p>
              <p>{company.address}</p>
              <p>{company.ntn}</p>
            </div>
            <div className="text-right">
              <p>
                <b>Invoice:</b> {meta.invoiceNo}
              </p>
              <p>
                <b>Date:</b> {meta.date}
              </p>
              <p>
                <b>Due:</b> {meta.dueDate}
              </p>
            </div>
          </div>

          <table className="w-full text-sm mb-4">
            <thead>
              <tr className="border-b">
                <th>Description</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((i, idx) => (
                <tr key={idx}>
                  <td>{i.description}</td>
                  <td>{i.qty}</td>
                  <td>{i.rate}</td>
                  <td>{i.qty * i.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-right">
            <p>
              Subtotal: {meta.currency} {subtotal}
            </p>
            <p>Tax: {tax}</p>
            <p className="font-bold text-lg">
              Total: {meta.currency} {total}
            </p>
          </div>

          <button
            disabled
            className="mt-4 w-full bg-gray-300 py-2 rounded"
          >
            Download PDF (Premium)
          </button>
        </div>
      </div>

      <style jsx>{`
        .input {
          border: 1px solid #ddd;
          padding: 8px;
          border-radius: 6px;
          width: 100%;
          margin-bottom: 6px;
        }
      `}</style>
    </div>
  );
}