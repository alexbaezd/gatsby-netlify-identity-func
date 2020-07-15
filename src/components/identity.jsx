import React from "react"
import { useNetlifyIdentity } from "react-netlify-identity-widget"

const Identity = () => {
  const identity = useNetlifyIdentity(
    "https://gatby-netlify-identity-f.netlify.app/"
  )

  return identity && identity.user ? (
    <>
      <h3>Hello {identity.user.user_metadata.full_name}</h3>
      <pre>{JSON.stringify(identity, null, 2)}</pre>
    </>
  ) : null
}

export default Identity
