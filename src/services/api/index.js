async function api(url, method) {
  try {
    const response = await fetch(url, { method })

    if (response.ok !== true) {
      throw new Error()
    } else return response.json()
  } catch (error) {
    console.error(error)
  }
}

export default api
