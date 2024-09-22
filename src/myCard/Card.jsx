import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import BucketList from "../components/BucketList";
import NewBucketModal from "../components/NewBucketModal";
import NewCardModal from "../components/NewCardModal";
import EditCardModal from "../components/EditCardModal";
import VideoPlayerModal from "../components/VideoPlayerModal";
import Login from "../components/Login";

function Card() {
  const [buckets, setBuckets] = useState([]);
  const [cards, setCards] = useState([]);
  const [editingCard, setEditingCard] = useState(null);
  const [playingCard, setPlayingCard] = useState(null);

  useEffect(() => {
    // Initialize with sample data
    setBuckets([
      { id: 1, name: "Entertainment Videos" },
      { id: 2, name: "Educational Videos" },
    ]);
    setCards([
      {
        id: 1,
        name: "Funny Cat Video",
        link: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        bucketId: 1,
      },
      {
        id: 2,
        name: "JavaScript Tutorial",
        link: "https://www.youtube.com/embed/PkZNo7MFNFg",
        bucketId: 2,
      },
    ]);
  }, []);

  const createBucket = (bucketName) => {
    const newBucket = { id: Date.now(), name: bucketName };
    setBuckets([...buckets, newBucket]);
  };
  const deleteBucket = (bucketId) => {
    // Remove the bucket
    setBuckets(buckets.filter((bucket) => bucket.id !== parseInt(bucketId)));
    // Remove all cards associated with this bucket
    setCards(cards.filter((card) => card.bucketId !== parseInt(bucketId)));
  };

  const createCard = (cardName, cardLink, bucketId) => {
    const newCard = {
      id: Date.now(),
      name: cardName,
      link: cardLink,
      bucketId,
    };
    setCards([...cards, newCard]);
  };

  const deleteCard = (cardId) => {
    setCards(cards.filter((card) => card.id !== cardId));
  };

  const updateCard = (updatedCard) => {
    setCards(
      cards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
    setEditingCard(null);
  };

  const [user] = useAuthState(auth);
  if (!user) {
    return (
      <div className="container mx-auto mt-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Creative Card Manager
        </h1>
        <Login />
        <p>Please login to manage your cards</p>
      </div>
    );
  }
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Creative Card Manager
      </h1>
      <div className="absolute top-5 right-20">
        <Login />
      </div>
      <div className="flex justify-between mb-6">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => document.getElementById("newBucketModal").showModal()}
        >
          New Bucket
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => document.getElementById("newCardModal").showModal()}
        >
          New Card
        </button>
      </div>

      <NewBucketModal
        onCreateBucket={createBucket}
        onDeleteBucket={deleteBucket}
        buckets={buckets}
      />
      <BucketList
        buckets={buckets}
        cards={cards}
        onDeleteCard={deleteCard}
        onEditCard={setEditingCard}
        onPlayVideo={setPlayingCard}
      />

      <NewCardModal onCreateCard={createCard} buckets={buckets} />
      <EditCardModal
        card={editingCard}
        buckets={buckets}
        onUpdateCard={updateCard}
        onClose={() => setEditingCard(null)}
      />
      <VideoPlayerModal
        card={playingCard}
        onClose={() => setPlayingCard(null)}
      />
    </div>
  );
}

export default Card;
