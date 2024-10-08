import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex-center min-n-screen w-full">{children}</div>
}

export default Layout
