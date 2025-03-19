import { Button, TextField, Typography, Box, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import { metaQuery } from '@/CustomHooks/cms.query.hooks';
import PreviewTab from '@/Components/previewTabs/previewTab';
import CopySection from '@/Components/CopySection/Copysection';
import Loader from '@/Components/loader/loader';

export default function Home() {
  const urlFormat = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
  const [url, setUrl] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [metaTags, setMetaTags] = useState<any>(null);
  const [isQueryEnabled, setIsQueryEnabled] = useState<boolean>(false);
  const [editableMetaTags, setEditableMetaTags] = useState<any>(null);
  const { data, isError, isLoading } = metaQuery(url, isQueryEnabled);

  interface HTMLInputElement {
    value: any
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (!urlFormat.test(input)) {
      setError('Invalid URL format');
    } else {
      setError('');
    }
    setUrl(input);
    setMetaTags(null);
  };

  const handleCheckWebsite = () => {
    if (!url || error) {
      return;
    }
    setIsQueryEnabled(true);
  };

  useEffect(() => {
    if (data) {
      setMetaTags(data);
      setEditableMetaTags(data);
    }
  }, [data]);

  const handleEditableInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const { value }: any = e.target;
    setEditableMetaTags((prevTags: any) => ({
      ...prevTags,
      [key]: value,
    }));
  };

  const renderMetaTags = () => {
    if (!metaTags) return null;

    return (
      <Box
      sx={{
        padding: "20px",
        backgroundColor: "#1e1e2e",
        color: "#f8f8f2",
        borderRadius: "12px",
        fontFamily: "monospace",
        fontSize: "14px",
        lineHeight: "1.5",
        width: "450px",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          color: "#bd93f9",
          fontWeight: "bold",
          marginBottom: "20px",
        }}>
        Scraped Meta Tags:
      </Typography>

      <Typography sx={{ color: "#6272a4" }}>{`<!-- HTML Meta Tags -->`}</Typography>
      <Typography sx={{ paddingLeft: "10px", marginBottom: "10px" }}>
        {`<title>${metaTags.title || "No title"}</title>`}
      </Typography>
      <Typography sx={{ paddingLeft: "10px", marginBottom: "20px" }}>
        {`<meta name="description" content="${metaTags.description || ""}" />`}
      </Typography>

      <Typography sx={{ color: "#6272a4", marginBottom: "10px" }}>{`<!-- Facebook Meta Tags -->`}</Typography>
      {["og:url", "og:type", "og:title", "og:description", "og:image"].map((tag) => (
        <Typography key={tag} sx={{ paddingLeft: "10px", marginBottom: "5px" }}>
          {`<meta property="${tag}" content="${metaTags[tag] || ""}" />`}
        </Typography>
      ))}

      <Typography sx={{ color: "#6272a4", marginTop: "20px", marginBottom: "10px" }}>{`<!-- Twitter Meta Tags -->`}</Typography>
      {["twitter:card", "twitter:url", "twitter:title", "twitter:description", "twitter:image"].map((tag) => (
        <Typography key={tag} sx={{ paddingLeft: "10px", marginBottom: "5px" }}>
          {`<meta name="${tag}" content="${metaTags[tag] || ""}" />`}
        </Typography>
      ))}

      {/* <Typography sx={{ color: "#6272a4", marginTop: "20px", marginBottom: "10px" }}>{`<!-- Discord Meta Tags -->`}</Typography>
      {["discord:card", "discord:url", "discord:title", "discord:description", "discord:image"].map((tag) => (
        <Typography key={tag} sx={{ paddingLeft: "10px", marginBottom: "5px" }}>
          {`<meta name="${tag}" content="${metaTags[tag] || ""}" />`}
        </Typography>
      ))} */}

      <CopySection metaTags={metaTags}/>
    </Box>
    );
  };
  const renderEditableFields = () => {
    if (!editableMetaTags) return null;

    return (
      <Box
      sx={{
        padding: "20px",
        backgroundColor: "#f4f4f9",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        width: "450px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginBottom: "20px",
          fontWeight: "bold",
          color: "#2d3748",
        }}
      >
        Edit Meta Tags:
      </Typography>
      {[
        
        { label: "URL", key: "og:url" },
        { label: "Title", key: "og:title" },
        { label: "Description", key: "og:description" },
        { label: "Image", key: "og:image" },
        { label: "Twitter Card", key: "twitter:card" },
        { label: "Twitter URL", key: "twitter:url" },
        { label: "Twitter Title", key: "twitter:title" },
        { label: "Twitter Description", key: "twitter:description" },
        { label: "Twitter Image", key: "twitter:image" },
      ].map(({ label, key }) => (
        <TextField
          key={key}
          label={label}
          value={editableMetaTags[key] || ""}
          onChange={(e) => handleEditableInputChange(e, key)}
          
          sx={{
            marginBottom: "15px",
            "& .MuiInputBase-root": {
              backgroundColor: "#ffffff",
              width: "400px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            },
          }}
        />
      ))}
    </Box>
    );
  };

  return (
    <Box
      sx={{
        padding: "20px",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f0f4f8, #d9e6f6)",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          textAlign: "center",
          color: "#004080",
          fontWeight: "bold",
          marginBottom: "40px",
        }}>
        Meta Tags Scrapper
      </Typography>

      <TextField
        value={url}
        onChange={handleInputChange}
        label="Enter website URL"
        error={!!error}
        helperText={error}
        sx={{
          marginBottom: "20px",
          background: "#ffffff",
          width: "600px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          "& .MuiInputBase-root": {
            borderRadius: "8px",
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCheckWebsite}
        disabled={!url || !!error}
        sx={{
          marginBottom: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "8px",
          background: "linear-gradient(90deg, #004080, #0066cc)",
          color: "#ffffff",
          boxShadow: "0 4px 12px rgba(0, 102, 204, 0.4)",
          "&:hover": {
            background: "linear-gradient(90deg, #003366, #0055aa)",
          },
          "&:disabled": {
            background: "#cccccc",
          },
        }}
      >
        Check Website
      </Button>

      {isLoading && <p><Loader/></p>}
      {isError && <p style={{ color: 'red' }}>Error fetching meta tags</p>}

      {metaTags && (
            <Paper
              elevation={3}
              sx={{
                padding: "20px",
                marginTop: "20px",
                backgroundColor: "blue",
                borderRadius: "16px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: "20px",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: 1, minWidth: "300px" }}>
                  {renderEditableFields()}
                </div>
                <div
                  style={{
                    flex: 1,
                    minWidth: "300px",
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    padding: "10px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {renderMetaTags()}
                </div>
                <div
                  style={{
                    flex: 1,
                    minWidth: "300px",
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    padding: "10px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <PreviewTab metaTags={editableMetaTags} />
                </div>
              </div>
            </Paper>
      )}
    </Box>

  );
}
