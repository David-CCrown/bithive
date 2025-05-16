import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Discover the best Guilds",
    description: "Join the best guilds in the Bithive ecosystem",
}

export default function GuildsPage() {
    return (
        <div>
            <div className="mx-auto">
                <h2>Guilds</h2>
                <p>Discover top guilds to join</p>
            </div>
        </div>
    )
}