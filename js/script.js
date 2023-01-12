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

    const render = () =>{
        //TODO add to #imgList images 80*80
        imgDB.forEach((element)=> {
            newImg = document.createElement('img');//variant 1
            newImg.src = element;
            newImg.classList.add('imgContent');
            document.querySelector('#imgList').appendChild(newImg);
        });


        // someElement.innerHTML = imgDB.map(()=>{//variant 2
        // }).join('');

        //TODO add to #imgList 'click' eventListener
    }

    console.log(imgDB);

    document.querySelector('#imgList').addEventListener('click',(event)=>{

    });






    render();
})()