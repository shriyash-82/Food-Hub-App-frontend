import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">© 2023 FoodHub, Inc</p>

    <Link to ="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    </Link>

   
  </footer>
    </div>
  )
}
