self.addEventListener('message', async () => {
    try {
      const response = await fetch('http://localhost:3000/feedback');
      const feedbacks = await response.json();
      self.postMessage(feedbacks);
    } catch (error) {
      console.error('Error fetching feedbacks', error);
    }
  });
  