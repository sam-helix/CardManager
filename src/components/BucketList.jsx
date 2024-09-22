import React from "react";

function BucketList({ buckets, cards, onDeleteCard, onEditCard, onPlayVideo }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {buckets.map((bucket) => (
        <div key={bucket.id} className="shadow-md rounded-lg p-6 bg-gray-200">
          <h2 className="text-xl font-bold mb-4">{bucket.name}</h2>
          <ul>
            {cards
              .filter((card) => card.bucketId === bucket.id)
              .map((card) => (
                <li
                  key={card.id}
                  className="mb-2 flex justify-between items-center"
                >
                  <span>{card.name}</span>
                  <div>
                    <button
                      onClick={() => onPlayVideo(card)}
                      className="bg-green-500 text-white px-2 py-1 rounded mr-2 *"
                    >
                      Play
                    </button>
                    <button
                      onClick={() => onEditCard(card)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDeleteCard(card.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default BucketList;
