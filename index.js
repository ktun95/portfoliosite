const projectCard = document.getElementById("blog-kl")

const getMidPoint = (DOMRect) => {
    return (DOMRect.bottom - (DOMRect.height / 2))
}


/*

NAME: Navigation Highlighting

DESCRIPTION: The code below is responsible for highlighting a particular nav list item when its corresponding element (a div) is sufficiently** in view.
             To be highlighted, a navigation list item element will be given a class (e.g class="highlighted"). Elements with this class will have a 
             :before pseudoelement
            
**When the top of the element is at or higher than the vertical middle of the viewport, and the bottom of the element             

ASSUMPTIONS: Each corresponding div listed on the navigation element is vertically contiguous, meaning that bottom of the nth div is touching the top of the n+1th div. 

*/



window.addEventListener('scroll', () => {
    const Rect = projectCard.getBoundingClientRect() 
    console.dir(getMidPoint(Rect))
})


/* 
CODE END: Navigation Highlighting
*/
