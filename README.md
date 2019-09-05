**Simple Adaptive Footer**

Simple JavaScript code for footer to adopt the page layout. Footer will stick to the bottom if page has not enough content.
Footer will change it's position on content change without refreshing the page.


**Notes:**

Add `id="main-footer"` to the footer element

Add following CSS -

    #main-footer {
    display block;
    width:100%;
    }

Add this script to the page - 

    <script>    
    document.onload =  positionFooter();    
    document.body.addEventListener("DOMSubtreeModified", positionFooter);    
    
    function  positionFooter() {    
    let myFooterHeight = document.getElementById("main-footer").offsetHeight;    
    let bodyHeight = document.body.offsetHeight;    
    
    if ((bodyHeight + myFooterHeight) <= (window.innerHeight)) {
        // then footer should touch bottom    
    document.getElementById("main-footer").style.bottom =  "0";
    document.getElementById("main-footer").style.position =  "absolute";      
    
    } else {    
    // footer should remain as it is    
    document.getElementById("main-footer").style.position =  "initial";    
    }    
    }    
    </script>


