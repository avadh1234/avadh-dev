import Link from "next/link";
import { useRouter } from "next/router";

const link = [
    {
        label : "Home",
        path : '/'
    },
    {
        label : "Blog",
        path : '/blog'
    },
    {
        label : "About",
        path : '/about'
    },
    {
        label : "Contact",
        path : '/contact'
    },
    {
        label : "Add post",
        path : '/admin/addpost'
    },
]

export default function Navbar() {
    const location = useRouter()
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light p-0" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" href="/"><img src="/logo.svg" alt="logo" width="170px"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="nav-items">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        {link.map((e,index)=>{
                            return(
                                <li className="nav-item" key={index}><Link href={e.path} className={`nav-link px-lg-3 py-3 py-lg-4 ${e.path == location.pathname ? "text-dark fw-bold" : ""} `}>{e.label}</Link></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  );
}