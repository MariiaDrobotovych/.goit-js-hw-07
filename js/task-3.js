const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

const galleryRef = document.querySelector('#gallery');
galleryRef.style.display = 'flex';


const createImage = (allImages) =>{
    return allImages.map((image)=>{
        const imageItem = document.createElement('img');
        imageItem.url = image.url;
        imageItem.alt = image.alt;
        return galleryRef.insertAdjacentHTML("afterend",imageItem);;
    });
}
    
const createdImages = createImage(images);
galleryRef.append(...createdImages);

// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const galleryRef = document.querySelector('ul#gallery');

// const createImgTag = images => {
//   images.forEach(image => {
//     const imageTag = document.createElement('img');
//     imageTag.src = image.url;
//     imageTag.alt = image.alt;
//     galleryRef.appendChild(imageTag);
//   });
//   return galleryRef;
// }

// console.log(createImgTag(images)); 