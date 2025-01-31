import React from 'react'
import InfoCards from './InfoCards'

const Header = () => {
  return (
    <>
      <InfoCards />
      <h2 className="text-xl md:text-3xl font-extrabold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-accent from-primary">
          Today&apos;s BCH CashTokens Prices
        </span>
      </h2>
    </>
  )
}

export default Header