export default function InfoBlock({heading, body}) {
    return (
        <div className="h-1/2 py-12 px-6">
            <h1 className="text-left text-3xl">{heading}</h1>
            <p className="text-left text-base">{body}</p>
        </div>
    )
}