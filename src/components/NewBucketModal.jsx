import React, { useState } from "react";

function NewBucketModal({ onCreateBucket, onDeleteBucket,buckets }) {
  const [bucketName, setBucketName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateBucket(bucketName);
    setBucketName("");
    document.getElementById("newBucketModal").close();
  };
  const handleDelete = (bucketId) => {
    onDeleteBucket(bucketId);
    document.getElementById("newBucketModal").close();
  };
  return (
    <dialog id="newBucketModal" className="p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Create New Bucket</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bucketName}
          onChange={(e) => setBucketName(e.target.value)}
          placeholder="Bucket Name"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => document.getElementById("newBucketModal").close()}
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
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Delete Bucket</h3>
        <select
          onChange={(e) => handleDelete(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="">Select a bucket to delete</option>
          {buckets.map((bucket) => (
            <option key={bucket.id} value={bucket.id}>
              {bucket.name}
            </option>
          ))}
        </select>
      </div>
    </dialog>
  );
}

export default NewBucketModal;
