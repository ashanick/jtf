import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout(props) {
  return (
    <div>
        <main >
            <Header />
            {props.children}
            <Footer />
        </main>
    </div>
  )
}

export default Layout