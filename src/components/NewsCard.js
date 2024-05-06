import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const NewsCard = ({ data }) => {
  const formattedDate = dayjs(data.publishedAt).fromNow();
  return (
    <Card sx={{ maxWidth: 345, height: '480px' }} key={data.url}>
      <CardMedia
        component="img"
        height="170"
        image={data.urlToImage}
        alt={data.title}
        loading="lazy"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" fontWeight={600}>
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          <b>Source:</b> {data.source.name} - {formattedDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
