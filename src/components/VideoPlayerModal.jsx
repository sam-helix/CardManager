import React from 'react';

function VideoPlayerModal({ card, onClose }) {
  if (!card) return null;

  return (
    <dialog open className="p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4">{card.name}</h2>
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          src={card.link}
          title={card.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </dialog>
  );
}

export default VideoPlayerModal;