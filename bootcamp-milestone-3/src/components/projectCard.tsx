import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface ActionAreaCardProps {
  link?: string;
  image: string;
  alt: string;
  heading: string;
  text: string;
}

export default function ActionAreaCard({ link, image, alt, heading, text }: ActionAreaCardProps) {
  const cardContent = (
    <CardActionArea>
      <CardMedia
        component="img"
        image={image}
        alt={alt}
        sx={{ maxHeight: 300, objectFit: 'cover' }}
      />
      <CardContent>
        <h2>{heading}</h2>
        <p>{text}</p>
      </CardContent>
    </CardActionArea>
  );

  return (
    <Card sx={{ maxWidth: 345}}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </Card>
  );
}