import axios from 'axios';

export const metaFn = async (url: string) => {
  try {
    const { data } = await axios.get(`/api/scrape-meta?url=${encodeURIComponent(url)}`);
    console.log(data, 'metatags');
    return data;  
  } catch (error) {
    console.error('Error fetching meta tags:', error);
    throw new Error('Failed to fetch meta tags');
  }
};
