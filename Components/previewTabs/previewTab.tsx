import React from 'react';
import { Typography, Box, Card, CardContent, Divider } from '@mui/material';

interface PreviewTabProps {
  metaTags: any; 
}

const PreviewTab: React.FC<PreviewTabProps> = ({ metaTags }) => {
  return (
    <Box
      sx={{
        marginTop: "20px",
        width: "100%",
        padding: "2px",
        backgroundColor: "#f4f4f9",
        borderRadius: "12px",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          marginBottom: "20px",
          color: "#004080",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Preview
      </Typography>

      <Card
        sx={{
          marginBottom: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              marginBottom: "10px",
              color: "#1877F2",
              fontWeight: "bold",
            }}
          >
            Facebook Preview
          </Typography>
          <Divider sx={{ marginBottom: "10px" }} />
          <Typography>
            <strong>Title:</strong> {metaTags["og:title"] || "No title"}
          </Typography>
          <Typography>
            <strong>Description:</strong> {metaTags["og:description"] || "No description"}
          </Typography>
          <Typography><strong>Image:-</strong>
          </Typography>
          <img src={metaTags["og:image"]} width={350} height={350} style={{objectFit:"contain"}} />
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              marginBottom: "10px",
              color: "#1DA1F2",
              fontWeight: "bold",
            }}>
            Twitter Preview
          </Typography>
          <Divider sx={{ marginBottom: "10px" }} />
          <Typography>
            <strong>Title:</strong> {metaTags["twitter:title"] || "No title"}
          </Typography>
          <Typography>
            <strong>Description:</strong> {metaTags["twitter:description"] || "No description"}
          </Typography>
          <Typography><strong>Image:-</strong>
          </Typography>
          <img src={metaTags["twitter:image"]} width={350} height={350} style={{objectFit:"contain"}}/>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: "12px",
          marginTop:"15px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              marginBottom: "10px",
              color: "#1DA1F2",
              fontWeight: "bold",
            }}>
            Discord Preview
          </Typography>
          <Divider sx={{ marginBottom: "10px" }} />
          <Typography>
            <strong>Title:</strong> {metaTags["discord:title"] || "No title"}
          </Typography>
          <Typography>
            <strong>Description:</strong> {metaTags["discord:description"] || "No description"}
          </Typography>
        </CardContent>
      </Card>

    </Box>
  );
};

export default PreviewTab;
