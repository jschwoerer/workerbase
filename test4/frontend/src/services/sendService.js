export async function postSendEmail (data) {
  const resp = await fetch(
    '/api/send',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  )

  if (!resp.ok) {
    throw new Error('Could not send Email')
  }
}
