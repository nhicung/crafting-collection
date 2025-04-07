import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

export default function TitlebarImageList() {
  const categories = [...new Set(collections.map((item) => item.category))];

  return (
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
          <ImageListItem cols={3}>
            <ListSubheader
              component='div'
              sx={{
                fontSize: '1.5rem',
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
              <ImageListItem key={item.img[0]}>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    '&:hover img': {
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <img
                    src={`${item.img[0]}?w=300&h=300&fit=crop&auto=format`}
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
  );
}

interface CollectionItem {
  img: string[];
  title: string;
  author: string;
  category: string;
}

const collections: CollectionItem[] = [
  {
    img: ['https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'],
    title: 'Breakfast',
    author: '@bkristastucchio',
    category: 'Paper Theaters',
  },
  {
    img: ['https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'],
    title: 'Breakfast',
    author: '@bkristastucchio',
    category: 'Paper Theaters',
  },
  {
    img: ['https://images.unsplash.com/photo-1551782450-a2132b4ba21d'],
    title: 'Burger',
    author: '@rollelflex_graphy726',
    category: 'Paper Theaters',
  },
  {
    img: ['https://images.unsplash.com/photo-1522770179533-24471fcdba45'],
    title: 'Camera',
    author: '@helloimnik',
    category: 'Jigsaw Puzzles',
  },
  {
    img: ['https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'],
    title: 'Coffee',
    author: '@nolanissac',
    category: 'Jigsaw Puzzles',
  },
  {
    img: ['https://images.unsplash.com/photo-1558642452-9d2a7deb7f62'],
    title: 'Honey',
    author: '@arwinneil',
    category: 'Wooden Figures',
  },
  {
    img: ['https://images.unsplash.com/photo-1516802273409-68526ee1bdd6'],
    title: 'Basketball',
    author: '@tjdragotta',
    category: 'Wooden Figures',
  },
  {
    img: ['https://images.unsplash.com/photo-1589118949245-7d38baf380d6'],
    title: 'Bike',
    author: '@southside_customs',
    category: 'Miniature Models',
  },
];
