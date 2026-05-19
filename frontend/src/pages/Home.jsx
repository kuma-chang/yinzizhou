import { Box, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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

      {/* ── Right: Portrait ── */}
      <Box sx={{
        position: { xs: 'relative', md: 'absolute' },
        // desktop: pinned to the right half
        right: { md: 0 },
        top: { md: 0 },
        bottom: { md: 0 },
        width: { xs: '100%', md: '46%' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        // mobile: sits below text with spacing
        mt: { xs: 6, md: 0 },
        order: { xs: 2, md: 2 },
      }}>
        <Box sx={{ 
          position: 'relative', 
          width: { xs: 200, md: 380 }, 
          height: { xs: 270, md: 520 } 
        }}>

          {/* Photo — swap src for real image */}
          <Box
            component="img"
            src="/yinzi-portrait.jpg"
            alt="Yinzi Zhou"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '2px',
              border: '0.5px solid',
              borderColor: 'rgba(201,169,110,0.22)',
              display: 'block',
            }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />

          {/* Placeholder */}
          <Box sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(13,16,64,0.7)',
            border: '0.5px solid',
            borderColor: 'rgba(201,169,110,0.22)',
            borderRadius: '2px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1.5,
            backdropFilter: 'blur(8px)',
            zIndex: -1,
          }}>
            <Typography variant="caption">Artist Photo</Typography>
          </Box>

          {/* Corner accents */}
          <Box sx={{
            position: 'absolute',
            bottom: -12, right: -12,
            width: 64, height: 64,
            borderRight: '0.5px solid',
            borderBottom: '0.5px solid',
            borderColor: 'primary.main',
            pointerEvents: 'none',
          }} />
          <Box sx={{
            position: 'absolute',
            top: -12, left: -12,
            width: 64, height: 64,
            borderLeft: '0.5px solid',
            borderTop: '0.5px solid',
            borderColor: 'primary.main',
            pointerEvents: 'none',
          }} />

        </Box>
      </Box>

    </Box>
  );
}
