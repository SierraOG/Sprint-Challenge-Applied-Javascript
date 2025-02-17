class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement;
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.images = document.querySelectorAll('.carousel img');
        console.log(this.images);
        this.currentIndex = 0;
        this.images[this.currentIndex].style.display = 'block';
        this.leftButton.addEventListener('click', () => this.goBackward());
        this.rightButton.addEventListener('click', () => this.goForward());
    }
    goBackward(){
        this.images[this.currentIndex].style.display = 'none';
        console.log(this.currentIndex);
        if (this.currentIndex === 0){
            this.currentIndex = this.images.length - 1;
        }
        else{
            this.currentIndex -= 1;
        }
        this.images[this.currentIndex].style.display = 'block';
    }
    goForward(){
        this.images[this.currentIndex].style.display = 'none';
        if (this.currentIndex === (this.images.length - 1)){
            this.currentIndex = 0;
        }
        else{
            this.currentIndex += 1;
        }
        this.images[this.currentIndex].style.display = 'block';
    }
}

let carousel = document.querySelector('.carousel');
let carouselEl = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
