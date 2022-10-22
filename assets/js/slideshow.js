class SlideState {
    constructor(id) {
        this.slides = document.getElementsByClassName("mySlides_" + id);
        this.descriptions = document.getElementsByClassName("descSlideShow_" + id);
        this.slide_idx = 1;
        this.id = id;
        this.showDivs(1);
    }

    showDivs(n) {
        if (n > this.slides.length) {this.slide_idx = 1;}
        if (n < 1) {this.slide_idx = this.slides.length;}
        for (var i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
            // TODO these try catch blocks are necessary in
            // case we have less descriptions than images
            // probably can be solved more elegantly
            try {
                this.descriptions[i].style.display = "none";
            } catch (error) {
                console.error(error);
            }
        }
        this.slides[this.slide_idx-1].style.display = "block";
        try {
            this.descriptions[this.slide_idx-1].style.display = "block";
        } catch (error) {
            console.error(error);
        }
    }

    plusDivs(n) {
        this.showDivs(this.slide_idx += n);
    }
}
