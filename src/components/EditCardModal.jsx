import React, { useState, useEffect } from 'react';

function EditCardModal({ card, buckets, onUpdateCard, onClose }) {
  const [editedCard, setEditedCard] = useState({ name: '', link: '', bucketId: '' });

  useEffect(() => {
    if (card) {
      setEditedCard({ ...card });
    }
  }, [card]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateCard(editedCard);
    onClose();
  };

  if (!card) return null;

  return (
    <dialog open className="p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Edit Card</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editedCard.name}
          onChange={(e) => setEditedCard({ ...editedCard, name: e.target.value })}
          placeholder="Card Name"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="url"
          value={editedCard.link}
          onChange={(e) => setEditedCard({ ...editedCard, link: e.target.value })}
          placeholder="Video Link"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <select
          value={editedCard.bucketId}
          onChange={(e) => setEditedCard({ ...editedCard, bucketId: parseInt(e.target.value) })}
          className="w-full p-2 mb-4 border rounded"
          required
        >
          {buckets.map(bucket => (
            <option key={bucket.id} value={bucket.id}>{bucket.name}</option>
          ))}
        </select>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default EditCardModal;