export default function Header({ title, subtitle }) {
    return (
        <div>
            {title && <h1 className="font-bold text-2xl">{title}</h1>}
            {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        </div>
    );
}