To Scroll to a element just add it's id and to add smooth scroll functionalitty use this 
``` function scrollToElement({id}:{id: string}) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
onClick= (()=>scrollToElement(id:"title"))
```


1. Use a index.ts to import all images,
2. The exported file is src for videos, and staticImageData for photos.



For Image Slider
I used an object array, cotaining name and url, it re-render on currentIndex, which is changed via a useEffect every {object.duration }, also sets isTrasitioning to true for 500ms.
Firstly media.map makes three components, which are in the same layer, but only is visible at a time due to useEffect changing currentIndex.
Whenver currentIndex changes other component becomes visible.