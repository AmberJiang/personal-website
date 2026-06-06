import { Link, NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FCFCFA] text-[#1A1A1A]">
      <header className="bg-white/80">
        <div className="mx-auto flex min-h-[72px] max-w-[1386px] flex-col items-start justify-center gap-3 px-[5vw] py-4 md:min-h-[120px] md:flex-row md:items-center md:justify-between md:px-[6vw] md:py-5 lg:h-[200px] lg:flex-row lg:justify-between lg:px-0 lg:pl-[120px] lg:pr-6 lg:py-0">
          <Link to="/" className="link-hover link-hover--ink font-serif text-xl font-semibold tracking-tight md:text-2xl lg:text-4xl lg:h-[62px] lg:w-[552px] lg:flex lg:items-center -mt-[5px]">
            Nanyan Amber Jiang
          </Link>
          <nav className="flex items-center gap-[3vw] text-xs uppercase md:gap-[4vw] lg:gap-[40px] lg:pr-[64px] lg:text-sm -mt-[5px]">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `link-hover link-hover--ink font-rubik h-[23px] min-w-[61px] flex items-center justify-center${isActive ? ' link-hover--active' : ''}`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `link-hover link-hover--ink font-rubik h-[23px] w-[61px] flex items-center justify-center${isActive ? ' link-hover--active' : ''}`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer className="bg-[#FCFCFA]">
        <div className="mx-auto max-w-[1386px] px-[5vw] pb-[4vw] pt-[6vw] text-xs text-[#6B7280] md:px-[6vw] md:pb-8 md:pt-[8vw] lg:pt-[80px] lg:pl-[120px] lg:pr-6 lg:pb-8">
          <p>© {new Date().getFullYear()} Nanyan Amber Jiang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
