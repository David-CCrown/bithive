import Header from "@/components/header";

export default function MainAppLayout({children}:{children: React.ReactNode}) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}