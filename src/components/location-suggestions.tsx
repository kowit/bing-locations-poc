import React, { useState } from 'react'
import axios from 'axios'

function LocationSuggestions() {
  const [suggestions, setSuggestions] = useState([])

  const handleAddressChange = async (event: any) => {
    const address = event.target.value
    const apiKey = 'AvaGdPycsxpns-Gj22MvNpbWn2pHmjueVz_ZDZPyviSM2UvRonNNByAphteYH5e2'

    const isDevelopment = process.env.NODE_ENV !== 'production'

    console.log(address)
    try {
      const response = await axios.get(`https://dev.virtualearth.net/REST/v1/Locations?query=${address}&key=${apiKey}`)
      console.log('~response', response)
      const data = response.data
      const suggestedAddresses = data.resourceSets[0].resources
      setSuggestions(suggestedAddresses)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="m-auto max-w-sm">
      <input
        onChange={handleAddressChange}
        type="text"
        id="location-suggestion"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search address"
        required
      />
      <ul>
        {suggestions.map((suggestion: any) => (
          <li className="p-2" key={suggestion.name}>
            {suggestion.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LocationSuggestions
