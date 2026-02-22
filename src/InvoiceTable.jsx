import React from "react";

const invoices = [
  { invoice: "INV001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card" },
  { invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
  { invoice: "INV003", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV004", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card" },
  { invoice: "INV005", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal" },
  { invoice: "INV006", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV007", paymentStatus: "Unpaid", totalAmount: "$300.00", paymentMethod: "Credit Card" },
];

function InvoiceTable() {
  const total = invoices.reduce(
    (sum, item) => sum + parseFloat(item.totalAmount.replace("$", "")),
    0
  );

  return (
    <div style={{ margin: "20px 16px" }}>
        

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#fff",
        }}
      >
        <caption style={{ marginBottom: "10px", fontWeight: "bold" }}>
         <div className="Data-hading">
          <h1>Recent Transastions</h1>
          <div className="Search">
            <input type="text" placeholder="Search Transastions  " />
            <button>Add New Transastions </button>
          </div>
          </div>
        </caption>

        <thead style={{ background: "#f5f5f5" }}>
          <tr>
            <th style={thStyle}>Invoice</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Method</th>
            <th style={{ ...thStyle, textAlign: "right" }}>Amount</th>
          </tr>
        </thead>

        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.invoice}>
              <td style={tdStyle}>{invoice.invoice}</td>
              <td style={tdStyle}>{invoice.paymentStatus}</td>
              <td style={tdStyle}>{invoice.paymentMethod}</td>
              <td style={{ ...tdStyle, textAlign: "right" }}>
                {invoice.totalAmount}
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot style={{ background: "#fafafa", fontWeight: "bold" }}>
          <tr>
            <td style={tdStyle} colSpan="3">
              Total
            </td>
            <td style={{ ...tdStyle, textAlign: "right" }}>
              ${total.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

const thStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  textAlign: "left",
};

const tdStyle = {
  padding: "12px",
  border: "1px solid #ddd",
};

export default InvoiceTable;