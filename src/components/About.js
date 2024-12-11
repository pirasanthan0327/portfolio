import * as React from 'react';
import AboutImg from '../assets/rb_899.png';
import { Box, Typography, Avatar } from '@mui/material';

export default function About() {
  const aboutText = `
    I'm Yogaeswaran Pirasanthan, a Full Stack Web Developer and UI/UX Designer passionate about creating stunning, user-friendly websites. 
    I specialize in React.js, Tailwind CSS, and Bootstrap, with expertise in frontend technologies like Redux, HTML, CSS, and PHP. 
    Proficient in Figma, I bring ideas to life visually and functionally. Explore my portfolio to see my work—let's build something amazing together!
  `;

  return (
    <section id="about">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: 3, md: 6 },
          backgroundColor: 'slategray',
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: { xs: 3, md: 0 },
            width: '100%',
            maxWidth: 350,
          }}
        >
          <Avatar
            alt="About Me"
            src={AboutImg}
            sx={{
              width: { xs: 150, md: 200 },
              height: { xs: 150, md: 200 },
              boxShadow: 3,
              border: '3px solid white',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease',
              },
            }}
          />
        </Box>

        {/* Text Section */}
        <Box
          sx={{
            width: '100%',
            maxWidth: 500,
            textAlign: { xs: 'center', md: 'left' },
            paddingLeft: { md: 4 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: '#2b2d77',
              marginBottom: 2,
              borderBottom: '4px solid #2b2d77',
              width: 'fit-content',
              marginX: 'auto',
              paddingBottom: 1,
            }}
          >
            About Me
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2, color: 'white', lineHeight: 1.6 }}>
            {aboutText}
          </Typography>
        </Box>
      </Box>
    </section>
  );
}
