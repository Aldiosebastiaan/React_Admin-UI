import React from 'react'

function CheckBox() {
  return (
    <>
    <input
                type="checkbox"
                id="status"
                name="status"
                className="w-4 h-4 accent-primary"
              />
              <label htmlFor="status" className="ml-2 text-sm text-gray-600">
                Keep me signed in
              </label>
    </>
  )
}

export default CheckBox
