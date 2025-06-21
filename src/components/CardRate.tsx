
const Star = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill={filled ? "#fbbf24" : "#e5e7eb"}
    className="h-5 w-5"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
  </svg>
);

const stars = (rating: number) =>
  Array.from({ length: 5 }, (_, i) => <Star key={i} filled={i < rating} />);

export default function CardRate({
  rating,
  name,
  description,
  image,
}: {
  rating: number;
  name: string;
  description: string;
  image: string;
}) {
  return (
    <div className=" flex max-w-sm flex-col items-center rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={image}
        alt="User"
        className="mb-4 h-20 w-20 rounded-full border-4 border-yellow-300 object-cover shadow"
      />
      <div className="mb-2 flex">{stars(rating)}</div>
      <h3 className="mb-1 text-lg font-semibold text-black">{name}</h3>
      <p className="mb-2 text-sm text-gray-500">Pelanggan</p>
      <p className="text-center italic text-gray-700">"{description}"</p>
    </div>
  );
}
