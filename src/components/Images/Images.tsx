import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import PopupModal from '../PopupModal';

export default function TitlebarImageList() {
  const [selectedImage, setSelectedImage] = React.useState<{
    images: Image[];
    title: string;
  } | null>(null);
  const categories = [...new Set(collections.map((item) => item.category))];

  const handleImageClick = (images: Image[], title: string) => {
    setSelectedImage({ images, title });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <ImageList
        sx={{
          gridTemplateColumns: 'unset !important',
          width: '100%',
          height: 'auto',
          overflow: 'hidden',
        }}
        cols={3}
      >
        {categories.map((category) => (
          <React.Fragment key={category}>
            <ImageListItem
              sx={{
                gridColumn: { xs: 'span 2', sm: 'span 4' },
              }}
            >
              <ListSubheader
                component='div'
                sx={{
                  fontSize: { xs: '1rem', sm: '1.5rem' },
                  fontWeight: 'bold',
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  color: 'white',
                }}
              >
                {category}
              </ListSubheader>
            </ImageListItem>
            {collections
              .filter((item) => item.category === category)
              .map((item) => (
                <ImageListItem key={item.images[0].url}>
                  <Box
                    onClick={() => handleImageClick(item.images, item.title)}
                    sx={{
                      width: '100%',
                      height: '100%',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      '&:hover img': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <img
                      src={`${item.images[0].url}?w=300&h=300&fit=crop&auto=format`}
                      alt={item.title}
                      loading='lazy'
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                      }}
                    />
                  </Box>
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                      />
                    }
                  />
                </ImageListItem>
              ))}
          </React.Fragment>
        ))}
      </ImageList>
      <PopupModal
        open={!!selectedImage}
        onClose={handleCloseModal}
        imageUrl={selectedImage?.images || []}
        title={selectedImage?.title || ''}
      />
    </>
  );
}

export type Image = {
  url: string;
  alt?: string;
};

interface CollectionItem {
  id: string;
  images: Image[];
  title: string;
  author: string;
  category: string;
}

export const collections: CollectionItem[] = [
  {
    id: 'breakfast-1',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        alt: 'Breakfast view 1',
      },
      {
        url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        alt: 'Breakfast view 2',
      },
      {
        url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        alt: 'Breakfast view 3',
      },
    ],
    title: 'Breakfast',
    author: '@bkristastucchio',
    category: 'Paper Theaters',
  },
  {
    id: 'breakfast-1',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        alt: 'Breakfast view 1',
      },
      {
        url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        alt: 'Breakfast view 2',
      },
      {
        url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        alt: 'Breakfast view 3',
      },
    ],
    title: 'Breakfast',
    author: '@bkristastucchio',
    category: 'Paper Theaters',
  },
  {
    id: 'breakfast-2',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        alt: 'Breakfast view 1',
      },
      {
        url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        alt: 'Breakfast view 2',
      },
      {
        url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        alt: 'Breakfast view 3',
      },
    ],
    title: 'Breakfast',
    author: '@bkristastucchio',
    category: 'Paper Theaters',
  },
  {
    id: 'burger-1',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        alt: 'Burger view 1',
      },
    ],
    title: 'Burger',
    author: '@rollelflex_graphy726',
    category: 'Paper Theaters',
  },
  {
    id: 'camera-1',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        alt: 'Camera view 1',
      },
    ],
    title: 'Camera',
    author: '@helloimnik',
    category: 'Jigsaw Puzzles',
  },
  {
    id: 'coffee-1',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        alt: 'Coffee view 1',
      },
    ],
    title: 'Coffee',
    author: '@nolanissac',
    category: 'Jigsaw Puzzles',
  },
  {
    id: 'honey-1',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        alt: 'Honey view 1',
      },
    ],
    title: 'Honey',
    author: '@arwinneil',
    category: 'Wooden Figures',
  },
  {
    id: 'basketball-1',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        alt: 'Basketball view 1',
      },
    ],
    title: 'Basketball',
    author: '@tjdragotta',
    category: 'Wooden Figures',
  },
  {
    id: 'bike-1',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        alt: 'Bike view 1',
      },
    ],
    title: 'Bike',
    author: '@southside_customs',
    category: 'Miniature Models',
  },
];
