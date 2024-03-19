import React from "react";

export default function Education() {
  return (
    <>
     <div id="education" className="bg-gray-800 py-24 sm:py-32">
     <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-10">
     <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
              Education
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-100">
            Grounded in academic excellence, my educational journey enriches the foundation of my portfolio
            </p>
          </div>
      </div>
  <div className="mx-auto max-w-7xl pt-10 px-6 lg:px-8">
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-lg leading-7 text-gray-100">Transactions every 24 hours</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">44 million</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-lg leading-7 text-gray-100">Assets under holding</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">$119 trillion</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-lg leading-7 text-gray-100">New users annually</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-100 sm:text-5xl">46,000</dd>
      </div>
    </dl>
  </div>
</div>

    </>
  );
}
