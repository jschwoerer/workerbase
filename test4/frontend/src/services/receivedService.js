export async function getReceivedEmails () {
  try {
    const resp = await fetch('/api/received')

    return await resp.json()
  } catch (err) {
    return []
  }
}
