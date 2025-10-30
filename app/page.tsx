
export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Ikthus App</h1>
            <a href="/auth/login" className="text-blue-500 underline">Login</a>
        </div>
    )
}
