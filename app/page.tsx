import Image from "next/image"

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-8">
            <Image src="/logo-full.svg" alt="Ikthus Logo" width={450} height={200} />
        </div>
    )
}
