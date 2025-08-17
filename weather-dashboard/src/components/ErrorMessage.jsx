export default function ErrorMessage({ message }) {
  return (
    <div className="bg-red-100 text-red-700 p-3 rounded-md text-center mb-4">
      {message}
    </div>
  );
}
