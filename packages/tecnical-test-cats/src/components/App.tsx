import { useEffect, useState } from 'react';

const URI_API_FACT_CAT = 'https://catfact.ninja/fact';
const URI_IMAGE_CAT = 'https://cataas.com/cat/says/';

const recoveryWord = (word: string) => {
  const arrayWords = word.split(' ',3);
  return arrayWords;
};

function App() {
  const [factCat, setFact] = useState<string | undefined>('Loading...');
  const [imageCat, setImageCat] = useState<string[]>([]);

  
  useEffect(() => {
    let isMounted = true;

    const fetchCatFact = async () => {
      try {
        const response = await fetch(URI_API_FACT_CAT);
        const data = await response.json();
        if(isMounted){
            setFact(data.fact);
        }
        
      } catch (error) {
        console.error('Error fetching cat fact:', error);
      }
    };

    fetchCatFact();


    return()=>{
        isMounted = false ;
    }

  }, []);

  
  useEffect(() => {

    let isMounted = true;
    if (factCat) {
      const fetchCatImage = async() => {
        try {
            const words = recoveryWord(factCat);
            const imagePromises = words.map(async word => {
              const response = await fetch(URI_IMAGE_CAT + word);
              const blob = await response.blob();
              return URL.createObjectURL(blob);
            });

            const imageUrls = await Promise.all(imagePromises);

            if(isMounted){
                setImageCat(imageUrls)
            }
            
         
        } catch (error) {
          console.error('Error fetching cat image:', error);
        }
      };

      fetchCatImage();
    }

    return()=>{
        isMounted = false
    }
  }, [factCat]);

  return (
    <div>
      {factCat && <h1 className='titleFact'>{factCat}</h1>}
      <div className='listImage'>
      {imageCat && imageCat.map((e,index)=><img key={index} src={e} alt="Cat saying something" />)}
      </div>
      
    </div>
  );
}

export default App;
