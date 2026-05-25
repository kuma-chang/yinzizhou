import { Box, Typography, Button, Stack } from '@mui/material';

export default function PortraitPhoto() {
  return (
    <>

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
    </>
  );
}
