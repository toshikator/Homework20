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
        // console.log('lolo');
        // console.log(event.target);

        if (event.target.classList.contains(classForImages) || event.target.classList.contains(classForBlur)){
            // console.log('koko');
            blurDiv.classList.toggle('hyde');
            divToShowIMG.classList.toggle('hyde');
            // console.log(event.target.src);
            imgShowedBig.setAttribute('src',event.target.src);
            const leftButton = document.createElement("img");
            const rightButton = document.createElement("img");
            leftButton.src = './icon/prev.png';
            leftButton.style.left = '2vw';
            rightButton.src = './icon/next.png';
            rightButton.style.right = '2vw';


            leftButton.style.position = 'fixed';
            rightButton.style.position = 'fixed';

            // leftButton.style.order = 0;

            blurDiv.appendChild(leftButton);
            blurDiv.appendChild(rightButton);
        }

    });






    render();
})()