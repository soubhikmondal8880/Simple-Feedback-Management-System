import React, { useEffect, useState } from 'react';

interface Feedback {
  id: number;
  name: string;
  feedback: string;
  createdAt: string;
}

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const worker = new Worker(new URL('../../public/feedbackWorker.js', import.meta.url));
    worker.postMessage(null);
    worker.onmessage = (event) => {
      setFeedbacks(event.data);
    };

    return () => {
      worker.terminate();
    };
  }, []);

  return (
    <ul>
      {feedbacks.map(feedback => (
        <li key={feedback.id}>
          <p>{feedback.name} ({new Date(feedback.createdAt).toLocaleString()}):</p>
          <p>{feedback.feedback}</p>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackList;
