export default function Modal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Request Received!</h2>
        <p>Check your email for further instructions.</p>
        <button
          onClick={onClose}
          className="mt-4 bg-packship-red text-white font-bold py-2 px-4 rounded-full hover:bg-red-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}