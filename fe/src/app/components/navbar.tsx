import Link  from "next/link"

// Add icons and images for more visual appeal later

export default function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <div className="nav">
                        <Link href="/" className="text-centre font-bold text-2xl mt-4">
                            To-Do Lists
                        </Link>
                    </div>
                </nav>
            </header>
            </>
    )
}