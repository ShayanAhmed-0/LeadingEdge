import './globals.css'
import { Inter } from 'next/font/google'
// import Navbar from '../layout/navbar/Navbar'
// import Footer from '../layout/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Leading Edge',
  description: 'Developers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
