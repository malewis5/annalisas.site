import Link from 'next/link';

export default function Avatar({ name, picture }) {
  return (
    <Link href="/me">
      <div className="flex items-center cursor-pointer">
        <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
        <div className="text-xl font-bold hover:underline">{name}</div>
      </div>
    </Link>
  );
}
