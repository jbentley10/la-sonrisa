import Footer from './components/footer'
import Navigation from './components/navigation'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-primary">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
