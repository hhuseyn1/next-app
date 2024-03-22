import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>Page not Found!
      <Link href="/" >
        Back to Home
      </Link> 
    </div>
  )
}

export default NotFound