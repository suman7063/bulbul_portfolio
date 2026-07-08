import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-4">
        Suman Singh
      </div>
      <p className="text-slate-400 mb-6">
        Building the future, one line of code at a time.
      </p>
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Suman Singh. All rights reserved.
      </p>
    </div>
  </footer>
  )
}

export default Footer