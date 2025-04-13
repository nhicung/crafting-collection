import background from '../../assets/crafting-hero.png';
import './hero.css';
import { Container, Typography, Box } from '@mui/material';

export default function Hero() {
  return (
    <>
      <div className='hero'>
        <img src={background} alt='hero-img' />
      </div>
      <Container maxWidth='lg'>
        <Box>
          <Typography variant='h2' sx={{ color: 'white' }}>
            Crafting Collection
          </Typography>
        </Box>
      </Container>
    </>
  );
}
