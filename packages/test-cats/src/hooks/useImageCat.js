import { useEffect, useState } from 'react';
import recoveryWord from '../util/recoveryWord.js';

import fetchinImageCat from '../services/fetchinImageCat.js'



function useImageCat({fact}) {
  const [imageCat, setImageCat] = useState([]);

  useEffect(() => {
    let isMounted = true;

    if (fact) {
      const fetchCatImage = async () => {
        try {
          const words = recoveryWord(fact); 
          const imagePromises = words.map(async (word) => {
              const response = await fetchinImageCat(word);
              const imageUrl = URL.createObjectURL(response);
              return imageUrl;
          });

          const imageUrls = await Promise.all(imagePromises);

          if (isMounted) {
            setImageCat(imageUrls);
          }
        } catch (error) {
          console.error("Error fetching cat image:", error);
        }
      };

      fetchCatImage();
    }

    return () => {
      isMounted = false;
    };
  }, [fact]);

  return {imageCat};
}



export default useImageCat;
