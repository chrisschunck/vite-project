export default function Section({ title, children }) {
    return (
        <section className="mb-8">
            {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
            <div>{children}</div>
        </section>
    );
}