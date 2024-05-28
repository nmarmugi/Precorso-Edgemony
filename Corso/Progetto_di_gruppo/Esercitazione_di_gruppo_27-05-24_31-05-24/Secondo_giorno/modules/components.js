/* const borderCard1ElGen = () => {
    const container = document.createElement('div');
    container.className = 'border-card1';
    return container
}

const borderCard2ElGen = () => {
    const container = document.createElement('div');
    container.className = 'border-card2';
    return container
} */

const cardElGen = (obj) => {
    const border1 = document.createElement('div');
    border1.className = 'border-card1';
    border1.classList.add('fadeIn', obj.animation);


    const border2 = document.createElement('div');
    border2.className = 'border-card2';



    /* crea main card */
    const container = document.createElement('div');
    container.className = 'card';


    const titleCard = document.createElement('h2');
    titleCard.className = 'card__name';
    titleCard.textContent = obj.name;

    const paragrafCard = document.createElement('p');
    paragrafCard.className = 'card__paragraph';
    paragrafCard.textContent = obj.description;

    /* crea contenitore cup-cone-brioche */
    const containerOffer = document.createElement('div');
    containerOffer.className = 'container-price';

    /* crea contenitore offerta cup */
    const containerOfferCup = document.createElement('div');
    containerOfferCup.className = 'price__littleCard';

    const titleOfferCup = document.createElement('h3');
    titleOfferCup.className = 'price__name';
    titleOfferCup.textContent = obj.offerte[0].nomeOfferta;

    const imageOfferCup = document.createElement('img');
    imageOfferCup.src = obj.offerte[0].img;
    imageOfferCup.className = 'price__img';
    imageOfferCup.width = 50;
    imageOfferCup.height = 50;
    imageOfferCup.alt = 'icona gelato';

    const priceOfferCup = document.createElement('span');
    priceOfferCup.className = 'price__price';
    priceOfferCup.textContent = obj.offerte[0].price;


    /* crea contenitore offerta cone */
    const containerOfferCone = document.createElement('div');
    containerOfferCone.className = 'price__littleCard';

    const titleOfferCone = document.createElement('h3');
    titleOfferCone.className = 'price__name';
    titleOfferCone.textContent = obj.offerte[1].nomeOfferta;

    const imageOfferCone = document.createElement('img');
    imageOfferCone.src = obj.offerte[1].img;
    imageOfferCone.className = 'price__img';
    imageOfferCone.width = 50;
    imageOfferCone.height = 50;
    imageOfferCone.alt = 'icona gelato';

    const priceOfferCone = document.createElement('span');
    priceOfferCone.className = 'price__price';
    priceOfferCone.textContent = obj.offerte[1].price;

    /* crea contenitore offerta brioche */
    const containerOfferBrioche = document.createElement('div');
    containerOfferBrioche.className = 'price__littleCard';

    const titleOfferBrioche = document.createElement('h3');
    titleOfferBrioche.className = 'price__name';
    titleOfferBrioche.textContent = obj.offerte[2].nomeOfferta;

    const imageOfferBrioche = document.createElement('img');
    imageOfferBrioche.src = obj.offerte[2].img;
    imageOfferBrioche.className = 'price__img';
    imageOfferBrioche.width = 50;
    imageOfferBrioche.height = 50;
    imageOfferBrioche.alt = 'icona gelato';

    const priceOfferBrioche = document.createElement('span');
    priceOfferBrioche.className = 'price__price';
    priceOfferBrioche.textContent = obj.offerte[2].price;

    /* crea immagine fondo card */
    const imageCard = document.createElement('img');
    imageCard.src = obj.image;
    imageCard.className = 'card__img';
    imageCard.width = 150;
    imageCard.alt = 'icona gelato';


    containerOfferCup.append(titleOfferCup, imageOfferCup, priceOfferCup);
    containerOfferCone.append(titleOfferCone, imageOfferCone, priceOfferCone);
    containerOfferBrioche.append(titleOfferBrioche, imageOfferBrioche, priceOfferBrioche);

    containerOffer.append(containerOfferCup, containerOfferCone, containerOfferBrioche);



    container.append(titleCard, paragrafCard, containerOffer, imageCard);
    border2.append(container);
    border1.append(border2);
    return border1;

}

export {
    /* borderCard1ElGen,
    borderCard2ElGen, */
    cardElGen
}



/* <!--CARD 1-->
            <div class="border-card1 fadeIn1">
                <div class="border-card2">

                    <div class="card">
                        <h2 class="card__name"><span>L</span>orem <span>I</span>psum</h2>
                        <p class="card__paragraph">
                            Lorem <strong>ipsum</strong> dolor sit amet,
                            consectetur adipisicing <strong>elit</strong>.
                            Pariatur explicabo molestias
                            vel officia <strong>distinctio</strong> fugiat.
                        </p>
                        <div title="Metti nel carrello" class="container-price">
                            <div class="price__littleCard">
                                <h3 class="price__name">Cup</h3>
                                <img class="price__img" src="./img/cup.png" alt="Immagine coppetta gelato" width="50px"
                                    height="50px">
                                <span class="price__price">2 &euro;</span>
                            </div>
                            <div class="price__littleCard">
                                <h3 class="price__name">Cone</h3>
                                <img class="price__img" src="./img/cone.png" alt="Immagine cono gelato" width="50px"
                                    height="50px">
                                <span class="price__price">3 &euro;</span>
                            </div>
                            <div class="price__littleCard">
                                <h3 class="price__name">Brioche</h3>
                                <img class="price__img" src="./img/brioche.png" alt="Immagine brioche gelato"
                                    width="50px" height="50px">
                                <span class="price__price">4 &euro;</span>
                            </div>
                        </div>
                        <img class="card__img" src="./img/img-first-card.png" alt="Immagine gusto gelato" width="150">
                    </div>
                </div>
            </div>
            <!--CARD 1--> */