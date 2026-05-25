import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import PortraitPhoto from '../components/PortraitPhoto'

export default function AboutPage() {

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
      <PortraitPhoto />
    </Box>
  );
}
