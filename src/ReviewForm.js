// ReviewForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box } from '@mui/material';

const ReviewForm = () => {
  const [review, setReview] = useState('');
  const [insight, setInsight] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Placeholder: send to API Gateway endpoint
    const formData = new FormData();
    formData.append('review', review);
    formData.append('insight', insight);
    formData.append('file', image);

    try {
      const response = await axios.post('https://your-api-gateway-url.amazonaws.com/prod/review', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Submitted successfully!');
      setReview('');
      setInsight('');
      setImage(null);
    } catch (err) {
      console.error(err);
      alert('Error submitting form.');
    }
  };

  return (
    <Box sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h5" gutterBottom>
        Submit Your Review or Insight
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TextField
          label="Review"
          multiline
          rows={3}
          variant="outlined"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
        <TextField
          label="Insight (optional)"
          multiline
          rows={2}
          variant="outlined"
          value={insight}
          onChange={(e) => setInsight(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ReviewForm;
