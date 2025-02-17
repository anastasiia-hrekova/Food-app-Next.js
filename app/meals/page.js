import Link from "next/link"

export default function Meals(){
    return <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>Meals Page</h1>
        <p style={{ color: 'white', textAlign: 'center' }}><Link href="/meals/share">Share</Link></p>

    </main>
}