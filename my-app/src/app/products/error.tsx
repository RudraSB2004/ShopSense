"use client"

export default function Error({
    error,
    reset,
}: { error : Error ; reset: () => void})  {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-4">
            <h2 className="text-3xl font-bold">
                Something went wrong
            </h2>
            <button
            onClick={reset}
            className="rounded bg-blue-600 px-5 py-3 text-white"
            >
                Try Again
            </button>
        </div>
    )
}