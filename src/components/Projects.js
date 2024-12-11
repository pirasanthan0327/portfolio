import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar, IconButton, Button, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { red } from '@mui/material/colors';

// Define the ExpandMore component for handling the expandable area
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: (props) => (props.expand ? 'rotate(180deg)' : 'rotate(0deg)'),
}));

// Project component with expandable sections
export default function Projects() {
  const config = {
    projects: [
      {
        image: require('../assets/rb_6805.png'),
        description: ' A food ordering website. Built with HTML, CSS, and PHP.  ',
        link: 'https://github.com/Thanusiyan1007/VNS_SERVICE_STATION_PROJECTk', // GitHub link for this project
      },
      {
        image: require('../assets/WhatsApp Image 2024-12-11 at 11.56.21_b7328038.jpg'),
        description: 'A VNS service system website. Built with React.js and Django.',
        link: 'https://github.com/SanojAhamed/Online-Food-Ordering-System', // GitHub link for this project
      },
      {
        image: require('../assets/rb_115118 (2).png'),
        description: 'A travel management system website. Built with HTML, JavaScript, CSS, and PHP.',
        link: 'https://github.com/Thanusiyan1007/VNS_SERVICE_STATION_PROJECTk', // GitHub link for this project
      },
      {
        image: require('../assets/rb_115118 (2).png'),
        description: 'A pp cake shop website. Built with Frontend: React.js, Tailwind CSS  Backend: Node.js (Optional, if you have backend features).',
        link: 'https://github.com/pirasanthan0327/cake-shop', // GitHub link for this project
      },
      {
        image: require('../assets/rb_115118 (2).png'),
        description: 'A GrowMore website. Built with Frontend: React.js, Tailwind CSS.  ackend: (If applicable, mention the backend technologies used, like Node.js, Express, Database: (If applicable, mention the database used like MongoDB, MySQL, etc',
        link: 'https://github.com/your-travel-management-website-link', // GitHub link for this project
      },
      {
        image: require('../assets/Screenshot 2024-12-11 115819.png'),
        description: 'A  Portfolio website. Built with Frontend: React.js, Tailwind CSS. Backend: (Optional, if your portfolio includes backend services like Node.js or an API). ',
        link: 'https://github.com/pirasanthan0327/portfolio', // GitHub link for this project
      },
    ],
  };

  return (
    <section id="projects" className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
      <div className="w-full">
        <div className="flex flex-col px-10 py-10">
          <h1 className="text-4xl border-b-4 border-[#7779b7] mb-2 w-[140px] font-bold">Projects</h1>
          <p>These are some of my best projects. I have built these with React, MERN, and vanilla CSS. Check them out.</p>
        </div>
      </div>
      <div className="w-full">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {config.projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className="relative group">
                <Card
                  sx={{
                    maxWidth: 345,
                    height: 400, // Fixed height for all cards
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between', // Ensures spacing is consistent
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease', // Card hover effect
                  }}
                  className="group-hover:scale-105" // Hover effect to scale up card
                >
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {project.title?.[0] || 'P'}
                      </Avatar>
                    }
                    action={
                      <ExpandMore aria-label="show more">
                        <ExpandMoreIcon />
                      </ExpandMore>
                    }
                    title={`Project ${index + 1}`}
                    subheader="Some date or info"
                  />
                  <CardMedia
                    component="img"
                    height="200" // Fixed height for images
                    image={project.image}
                    alt={`Project ${index + 1}`}
                  />
                  {/* Description shown only on hover */}
                  <CardContent className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}></Typography>
                  </CardContent>
                  {/* Hidden description and view button shown on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-col text-white p-4">
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                      {project.description}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: '10px' }}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering card click
                        window.open(project.link, '_blank');
                      }}
                    >
                      View Project
                    </Button>
                  </div>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
}
