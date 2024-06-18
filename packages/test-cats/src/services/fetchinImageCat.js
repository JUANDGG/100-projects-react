const URI_IMAGE_CAT = "https://cataas.com/cat/says/";

const fetchinImageCat = async (word) => {
  try {
    const response = await fetch(URI_IMAGE_CAT+word);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.blob(); // Devolvemos directamente el blob
  } catch (error) {
    console.error('Error fetching data image cat:', error);
    throw error; // Re-lanzamos el error para manejarlo en useImageCat
  }
};

export default fetchinImageCat;
