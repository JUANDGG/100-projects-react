// @ts-check
const { test, expect } = require('@playwright/test');


const localhosturl ="http://localhost:5173";

test('app shows ramdom fact and image', async ({ page }) => {
  const URI_IMAGE_CAT = "https://cataas.com/cat/says/";
  //la ruta ala que tiene que ir
  await page.goto(localhosturl);

  //esto recuperaria los elementos html
  const text = await page.getByRole('paragraph');
  const image =await page.getByRole('img')


  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');

  //aca basicamente le decimos lo que tiene que hacer nuestro test
  //le decimos que el texto no puede ser nulo
  await expect(textContent).not.toBeNull();
  //y que la imagen tiene que comenzar de esta manera
  await expect(imageSrc?.startsWith(URI_IMAGE_CAT));

  console.log(imageSrc?.startsWith(URI_IMAGE_CAT))

});
