export async function getSentEmails () {
  try {
    const resp = await fetch('/api/sent')

    return await resp.json()
  } catch (err) {
    return []
  }
}
