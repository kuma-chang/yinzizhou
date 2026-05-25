import { Box, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PortraitPhoto from '../components/PortraitPhoto'

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box sx={{
      position: 'relative',
      minHeight: '80vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      // Stack vertically on mobile, keep side-by-side on desktop
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: { xs: 'center', md: 'flex-start' },
      pt: { xs: 12, md: 0 },
      pb: { xs: 6, md: 0 },
    }}>

      {/* ── Glow orbs ── */}
      <Box sx={{
        position: 'absolute',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(91,127,212,0.12) 0%, transparent 70%)',
        right: 80,
        top: '10%',
        zIndex: 1,
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute',
        width: 220,
        height: 220,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)',
        left: 80,
        bottom: '10%',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

       {/* ── Left: Text content ── */}
      <Box sx={{
        position: 'relative',
        zIndex: 2,
        ml: { xs: 0, md: 10},
        px: { xs: 3, md: 8 },
        maxWidth: { xs: '100%', md: '52%' },
        width: { xs: '100%', md: 'auto' },
        textAlign: { xs: 'center', md: 'left' },
        order: { xs: 1, md: 1 },
      }}>

        {/* Eyebrow */}
        <Stack 
          direction="row" 
          alignItems="center" 
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          spacing={1.5} 
          sx={{ mb: 3.5 }}
        >
          <Box sx={{ width: 36, height: '0.5px', bgcolor: 'primary.main' }} />
          <Typography variant="overline">Flutist</Typography>
        </Stack>

        {/* Name */}
        <Typography variant="h1" sx={{ mb: 0.5 }}>
          Yinzi
        </Typography>
        <Typography variant="h1" sx={{ fontStyle: 'italic', color: 'primary.main' }}>
          Zhou
        </Typography>

        {/* Subtitle */}
        <Typography variant="subtitle1" sx={{ mt: 2.5, mb: 3.5 }}>
          This is a placeholder for Subtitle
        </Typography>

        {/* Description */}
        <Typography variant="body1" sx={{
          color: 'text.disabled',
          maxWidth: { xs: '100%', md: 360 },
          mx: { xs: 'auto', md: 0 },
          mb: 5.5,
        }}>
          This is a placeholder for Description
        </Typography>

        {/* CTAs */}
        <Stack 
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
        >
          <Button variant="contained" onClick={() => navigate('/event')}>
            Upcoming Events
          </Button>
          <Button variant="outlined" onClick={() => navigate('/about')}>
            Biography
          </Button>
        </Stack>

      </Box>

      <PortraitPhoto />

    </Box>
  );
}
