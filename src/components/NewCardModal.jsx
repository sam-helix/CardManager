import React, { useState } from 'react';

function NewCardModal({ onCreateCard, buckets }) {
  const [cardName, setCardName] = useState('');
  const [cardLink, setCardLink] = useState('');
  const [selectedBucketId, setSelectedBucketId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateCard(cardName, cardLink, parseInt(selectedBucketId));
    setCardName('');
    setCardLink('');
    setSelectedBucketId('');
    document.getElementById('newCardModal').close();
  };

  return (
    <dialog id="newCardModal" className="p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Create New Card</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          placeholder="Card Name"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="url"
          value={cardLink}
          onChange={(e) => setCardLink(e.target.value)}
          placeholder="Video Link"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <select
          value={selectedBucketId}
          onChange={(e) => setSelectedBucketId(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        >
          <option value="">Select a Bucket</option>
          {buckets.map(bucket => (
            <option key={bucket.id} value={bucket.id}>{bucket.name}</option>
          ))}
        </select>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => document.getElementById('newCardModal').close()}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Create
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default NewCardModal;