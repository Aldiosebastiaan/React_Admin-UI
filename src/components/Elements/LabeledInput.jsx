import React from 'react'

function LabeledInput() {
  return (
    <>
        <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="hello@example.com"
                className="w-full px-3 py-2 text-sm text-gray-700 border border-gray-200 rounded-md bg-special-mainBg focus:border-gray-400 focus:outline-none focus:ring-0"
              />
    </>
  )
}

export default LabeledInput
