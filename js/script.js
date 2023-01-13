(()=>{
    const imgDB = [
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg',
        './img/11.jpg',
    ];
    const classForImages = 'imagesLine';
    const classForBlur = 'alert_zone';
    // const classForBigImg = 'imgContent';

    const listOfImages = document.querySelector('#imgList');
    const blurDiv = document.querySelector('#alertZone');
    const divToShowIMG = document.querySelector('#Content');
    const imgShowedBig = document.querySelector('#Content>.imgContent')

    const render = () =>{
        //TODO add to #imgList images 80*80
        imgDB.forEach((element)=> {
            newImg = document.createElement('img');//variant 1
            newImg.src = element;
            newImg.classList.add('imagesLine');
            listOfImages.appendChild(newImg);
        });


        // someElement.innerHTML = imgDB.map(()=>{//variant 2
        // }).join('');

        //TODO add to #imgList 'click' eventListener
    }

    console.log(imgDB);

    document.addEventListener('click',(event)=>{
        console.log(event);
        // console.log(event.target);

        if (event.target.classList.contains(classForImages)) {
            // console.log(event);
            blurDiv.classList.remove('hyde');
            divToShowIMG.classList.remove('hyde');
            imgShowedBig.setAttribute('src', event.target.src);
            const leftButton = document.createElement("img");
            const rightButton = document.createElement("img");
            leftButton.src = './icon/prev.png';
            leftButton.classList.add('prevBtn');
            rightButton.src = './icon/next.png';
            rightButton.classList.add('nextBtn');
            leftButton.classList.add('navBtn');
            rightButton.classList.add('navBtn');

            blurDiv.appendChild(leftButton);
            blurDiv.appendChild(rightButton);
        } else if(event.target.classList.contains('navBtn')){
            if(event.pageX < 300){
                console.log(imgShowedBig);
                console.log( imgShowedBig.getAttribute('src'))
            }
        } else {
            blurDiv.classList.add('hyde');
            divToShowIMG.classList.add('hyde');
        }

    });






    render();
})()