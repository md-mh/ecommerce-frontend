import React from "react";

// The Billing component that displays the billing information form.
function Billing() {
  return (
    <>
      {/* Billing Information Column */}
      <div className="bg-(--card) rounded-lg shadow p-6 ">
        <h2 className="text-2xl font-bold mb-4 text-(--foreground)">
          Billing Information
        </h2>
        {/* Placeholder for billing info */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-(--foreground)">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-(--border) bg-(--background) py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-(--primary)/30"
              placeholder="Full Name"
              autoComplete="name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-(--foreground)">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border border-(--border) bg-(--background) py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-(--primary)/30"
              placeholder="Email Address"
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-(--foreground)">
              Address
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-(--border) bg-(--background) py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-(--primary)/30"
              placeholder="Street Address"
              autoComplete="street-address"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-(--primary) text-(--primary-foreground) font-semibold rounded hover:bg-(--primary)/90 transition cursor-pointer"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </>
  );
}
export default Billing;
