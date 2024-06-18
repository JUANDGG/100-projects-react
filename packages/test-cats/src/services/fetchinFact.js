const URI_API_FACT_CAT = 'https://catfact.ninja/fact';


const fetchinImageCat = async () => {
    try {
      const response = await fetch(URI_API_FACT_CAT);
      return response.json() ;
    } catch (error) {
      console.error('! Error fetching data fact ');
    }
  };

export default fetchinImageCat;