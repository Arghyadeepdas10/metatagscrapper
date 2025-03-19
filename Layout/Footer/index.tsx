import React from 'react';
import { Box, Typography, Link, Container, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #1a237e, #4a148c)',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" textAlign="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              We provide innovative solutions tailored to your business. Lets work together to achieve your goals.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                Home
              </Link>
              <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                Services
              </Link>
              <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="#" sx={{ color: 'white', mx: 1 }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" sx={{ color: 'white', mx: 1 }}>
                <Twitter />
              </IconButton>
              <IconButton href="#" sx={{ color: 'white', mx: 1 }}>
                <Instagram />
              </IconButton>
              <IconButton href="#" sx={{ color: 'white', mx: 1 }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={4}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Your Website. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
