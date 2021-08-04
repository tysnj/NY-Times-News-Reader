export const fetchStories = async (url) => {
  return await fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response.message)
    }
  })
}

export const cleanData = (data) => {
  return data
}