import Link from 'next/link';
import '../styles/globals.css';

export default function NotFound() {
  return (
    <div>
      <h1 className="text-2xl mb-5">Page Not Found</h1>
      <p className="mb-3">The page you&apos;re looking for does not exist.</p>
      <Link href="/" className="hover:underline">
        Return to homepage
        <svg
          className="inline ml-2"
          width="25"
          height="8"
          viewBox="0 0 35 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.3536 4.35355C34.5488 4.15829 34.5488 3.84171 34.3536 3.64645L31.1716 0.464466C30.9763 0.269204 30.6597 0.269204 30.4645 0.464466C30.2692 0.659728 30.2692 0.976311 30.4645 1.17157L33.2929 4L30.4645 6.82843C30.2692 7.02369 30.2692 7.34027 30.4645 7.53553C30.6597 7.7308 30.9763 7.7308 31.1716 7.53553L34.3536 4.35355ZM0 4.5H34V3.5H0V4.5Z"
            fill="black"
          />
        </svg>
      </Link>
    </div>
  );
}
