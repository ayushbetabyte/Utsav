let featuedImages = document.getElementById('featured-img');
        let smallImg = document.getElementsByClassName('small-Imgs');

        smallImg[0].addEventListener('click', () => {
            featuedImages.src = smallImg[0].src;
            smallImg[0].classList.add('sm-cards')
            smallImg[1].classList.remove('sm-cards')
            smallImg[2].classList.remove('sm-cards')
            smallImg[3].classList.remove('sm-cards')
            smallImg[4].classList.remove('sm-cards')
        })
        smallImg[1].addEventListener('click', () => {
            featuedImages.src = smallImg[1].src;
            smallImg[0].classList.remove('sm-cards')
            smallImg[1].classList.add('sm-card')
            smallImg[2].classList.remove('sm-cards')
            smallImg[3].classList.remove('sm-cards')
            smallImg[4].classList.remove('sm-cards')
        })
        smallImg[2].addEventListener('click', () => {
            featuedImages.src = smallImg[2].src;
            smallImg[0].classList.remove('sm-cards')
            smallImg[1].classList.remove('sm-cards')
            smallImg[2].classList.add('sm-cards')
            smallImg[3].classList.remove('sm-cards')
            smallImg[4].classList.remove('sm-cards')
        })
        smallImg[3].addEventListener('click', () => {
            featuedImages.src = smallImg[3].src;
            smallImg[0].classList.remove('sm-cards')
            smallImg[1].classList.remove('sm-cards')
            smallImg[2].classList.remove('sm-cards')
            smallImg[3].classList.add('sm-cards')
            smallImg[4].classList.remove('sm-cards')
        })
        smallImg[4].addEventListener('click', () => {
            featuedImages.src = smallImg[4].src;
            smallImg[0].classList.remove('sm-cards')
            smallImg[1].classList.remove('sm-cards')
            smallImg[2].classList.remove('sm-cards')
            smallImg[3].classList.remove('sm-cards')
            smallImg[4].classList.add('sm-cards')
        })