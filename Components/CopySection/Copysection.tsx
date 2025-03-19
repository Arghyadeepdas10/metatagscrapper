import React from 'react';
import { Button } from '@mui/material';

interface MetaTags {
  title?: string;
  description?: string;
  'og:url'?: string;
  'og:type'?: string;
  'og:title'?: string;
  'og:description'?: string;
  'og:image'?: string;
  'twitter:card'?: string;
  'twitter:url'?: string;
  'twitter:title'?: string;
  'twitter:description'?: string;
  'twitter:image'?: string;
}

interface CopySectionProps {
  metaTags: MetaTags;
}

const CopySection: React.FC<CopySectionProps> = ({ metaTags }) => {
  const handleCopy = () => {
    const metaString = Object.entries(metaTags).map(([key, value]) => `<meta property="${key}" content="${value}" />`).join('\n');
    navigator.clipboard.writeText(metaString).then(() => {
        alert('Meta tags copied to clipboard!'); 
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <Button variant="contained" onClick={handleCopy} sx={{ marginTop: '10px',width:"100%" }}>
      Copy To Clipboard
    </Button>
  );
};

export default CopySection;
