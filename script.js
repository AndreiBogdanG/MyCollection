const mainDiv = document.getElementById('mainDiv');
const numberOfDivs = document.getElementsByClassName('flip-card').length;
const gamesList = ['Battle Cards', 'Hipopotanța', 'Atlantida', 'Quest Raiders', 'Fazan', 'Heist Cities'];
const texts = [
    'Welcome to "Fazan," a delightful single-player word Java game that will challenge your vocabulary and strategic thinking!',
];


const list = [];

const game1 = {
    image:'fazan.jpg',
    title: 'Fazan',
    textEn: `Welcome to "Fazan," a delightful single-player word Java game that will challenge your vocabulary and strategic thinking! <br><br><br><i>
    This game can't be played directly, but you can see a demo on <b>Youtube</i></b>`,
    textRo: `Bine ai venit la "Fazan", un joculeț foarte distractiv făcut în Java, ce îți va provoca gândirea strategică și vocabularul! <br><br><i>
    Acest joc nu poate fi rulat direct, dar poți vedea un demo pe <b>Youtube.</i></b>    `,
    link: 'https://youtu.be/pXHFKJG21Fc',
    btnTextEn: 'See on Youtube',
    btnTextRo: 'Vezi pe Youtube'
};

const game2 = {
    image: 'heistCities.jpg',
    title: 'Heist Cities',
    textEn: `Embark on an adventure in "Heist Cities - Romania", a thrilling Java-based game where your ultimate goal is to turn 1000 euro into your first million! <br><br><i>
    This game can't be played directly, but you can see a demo on <b>Youtube</i></b>`,
    textRo: `Înscrie-te în aventura "Heist Cities - Romania", un joculeț Java captivant în care scopul final este să transformi cei 1000 de euro în primul milion! <br><br><i>
    Acest joc nu poate fi rulat direct, dar poți vedea un demo pe <b>Youtube.</i></b>    `,
    link: 'https://youtu.be/OJ3j5AMlhiE',
    btnTextEn: 'See on Youtube',
    btnTextRo: 'Vezi pe Youtube'
};

const game3 = {
    image: 'battleCards.jpg',
    title: 'Battle Cards',
    textEn: `Just a simple cards game.<br><br> The deck is split equally between two players. Each player draws the top card from their deck.<br> The player with the higher card wins both cards. <br><br>Probably the first cards game we ever learn.`,
    textRo: `Un joc de cărți foarte simplu.<br><br> Cărțile sunt împărțite în mod egal la cei 2 jucători. Fiecare întoarce cartea de sus.<br> Jucătorul cu cartea mai mare le ia pe amândouă. <br><br>Probabil primul joc de cărți pe care îl învățăm.`,
    link: 'https://andreibogdang.github.io/BattleCards/',
    btnTextEn: 'Play Game',
    btnTextRo: 'Joacă-te'
};

const game4 = {
    image: 'hipopotanta.jpg',
    title: 'Hipopotanța',
    textEn: 'This is a fun card game you can play on your phone or computer. The game includes 21 cards: 10 pairs of animals and a single card representing <b>Hipopotanța</b>, the animal without a pair. <br><br>Match all the animals and avoid getting stuck with Hipopotanța!',
    textRo: `Acesta e un joc distractiv de cărți pentru calculator sau telefon. Jocul include 21 de cărți: 10 perechi de animale și o singură carte cu <b>Hipopotanța</b>, animalul nepereche. <br><br> Fă perechi de animale și evită pe cât posibil să rămâi cu Hipopotanța!`,
    link: 'https://andreibogdang.github.io/HipopotantaCardsGame/',
    btnTextEn: 'Play Game',
    btnTextRo: 'Joacă-te'
};

const game5 = {
    image: 'atlantida.jpg',
    title: 'Atlantida',
    textEn: 'Embark on an enchanting adventure to uncover the lost city of Atlantis! This enchanted journey invites you to solve puzzles, complete quests and explore mysterious lands.<br><br> Uncover ancient secrets, all while enjoying this magical game!',
    textRo: `Ia parte la o extraordinară aventură pentru a descoperi Atlantida! Această călătorie fermecată te provoacă să rezolvi provocări, enigme și să explorezi tărâmuri misterioase.<br><br> Descoperă secrete antice în timp ce te bucuri de acest joc magic!`,
    link: 'https://andreibogdang.github.io/Atlantida/',
    btnTextEn: 'Play Game',
    btnTextRo: 'Joacă-te'
};

const game6 = {
    image: 'questRaiders.jpg',
    title: 'Quest Raiders',
    textEn: 'This is a small presentation website for my print-and-play games. <br><br>For the moment, the games are only available on the Etsy platform, but use this website to solve a short puzzle and earn a discount code.',
    textRo: 'Acesta e un mic site de prezentare pentru jocurile mele print-and-play. <br><br>Deocamdată, acestea sunt disponibile doar pe platforma Etsy, dar pe acest site poți rezolva un puzzle scurt pentru a câștiga un cod de reduceri.',
    link: 'https://andreibogdang.github.io/QuestRaiders/',
    btnTextEn: 'Visit Site',
    btnTextRo: 'Vizitează site'
};

const game7 = {
    image: 'myCollection.jpg',
    title: 'My Collection',
    textEn: `A website (<b>this exact website</b>, to be precise) which presents all of my Github projects (those which deserve to, at least).
    <br><br> Java games can't be played directly, but the JavaScript ones can. <br><br>Please enjoy responsibly! `,
    textRo: `Un website (<b>fix website-ul ăsta</b>, ca să fiu sincer) care prezintă toate proiectele mele de pe Github (pe cele care merită, cel puțin).
    <br><br> Jocurile făcute în Java nu se pot juca direct de aici, dar cele în JavaScript da. <br><br>Vă rog, jucați responsabil! `,
    link: '',
    btnTextEn: `Refresh`,
    btnTextRo: 'Reîncarcă'
};

const game8 = {
    image: 'travel-journal.jpg',
    title: 'Tenzies',
    textEn: ` One of my first React projects - a travel blog. Didn't have time to update the locations, though, work in progress... <br><br>Just to show some of the <strike>places I've been</strike> things I've learned.<br><br>It was fun!`,
    textRo: ` Unul dintre primele mele proiecte în React. N-am avut timp să trec toate locurile, poate reușesc în viitor.
    <br><br> Doar cât să vedeți <strike>pe unde m-am plimbat</strike> ce am învățat. <br><br>A fost fain! `,
    link: 'https://andreibogdang.github.io/Travel-Journal/',
    btnTextEn: `Visit Site`,
    btnTextRo: 'Vizitează'
};

const game9 = {
    image: 'quizGame.jpg',
    title: 'Quiz Game',
    textEn: 'Nice little quiz game which fetches some random questions from an online database. <br><br>It also uses a module which translates the questions and answers to Romanian. Or, at least, it tries... <br><br>Have fun!',
    textRo: `Un joculeț simplu de Trivia care ia întrebări aleatorii dintr-o bază de date online.
    <br><br> De asemenea, folosește un modul care traduce întrebările și răspunsurile în română. Mă rog, mai mult încearcă... <br><br>Distracție plăcută! `,
    link: 'https://andreibogdang.github.io/QuizGame/',
    btnTextEn: `Play Game`,
    btnTextRo: 'Joacă-te'
};


const game10 = {
    image: 'tenzies.jpg',
    title: 'Tenzies',
    textEn: ' Simple yet fun Tenzies game: Roll ten dice, hold some of them and try to make all the dice show the same value in as few rolls as possible.<br><br>So easy, even Hipopotanța can play it.<br><br>Good Luck!',
    textRo: ` Un joc simplu gen Bambilici. Dă cu zarurile și oprește câte vrei, dar încearcă să le faci pe toate egale din cât mai puține aruncări.
    <br><br> Atât de simplu încât îl înțelege și Hipopotanța. <br><br>Baftă! `,
    link: 'https://andreibogdang.github.io/Tenzies/',
    btnTextEn: `Play Game`,
    btnTextRo: 'Joacă-te'
};

const game11 = {
    image: 'intoleranta.jpg',
    title: 'Intoleranta',
    textEn: `Help Hipopotanta satisfy her hunger without causing a tummy disaster! Guess the 4 dishes she can safely eat before her patience - or her belly - explodes.<br><br>Can you crack the menu in time?<br><br>Have fun!`,
    textRo: `Ajut-o pe Hipopotanța să-și potolească foamea fără să-i faci rău la burtică! Ghicește cele 4 feluri pe care le poate mânca fără să pocnească.
    <br><br> Oare îi poți ghici meniul la timp?<br><br>Distracție plăcută! `,
    link: 'https://andreibogdang.github.io/Intoleranta/',
    btnTextEn: `Play Game`,
    btnTextRo: 'Joacă-te'
}

const game12 = {
    image: 'inkomode.jpg',
    title: 'Ink.O.Mode',
    textEn: `Just a little presentation site (work in progress) for my favorite tattoo artist in Brasov. <br><br>You can browse the models and - if you consider getting some ink - you have a contact page.<br><br>Fingers crossed!`,
    textRo: `O mică pagină de prezentare (încă în lucru) pentru tatuatorul meu preferat din Brașov.
    <br><br> Poți să frunzărești mai multe modele și - dacă te hătărăști să te tatuezi și tu - ai o pagină de contact.<br><br>Țin pumnii! `,
    link: 'https://andreibogdang.github.io/inkomode/',
    btnTextEn: `Visit Site`,
    btnTextRo: 'Vizitează site'
}

const game13 = {
    image: 'sequence.jpg',
    title: 'Sequence',
    textEn: `Sequence, one of my favorite boardgames. Use a computer as the host, then connect your phones using the code. Supporting only two players (for now, at least), it's a wonderful game for couples.<br><br>Please wait, sometimes it takes some time to load!`,
    textRo: `Sequence, unul dintre jocurile mele favorite. Folosiți un computer drept gazdă, apoi conectați-vă telefoanele folosind codul. Momentan acceptă doar doi jucători, dar e minunat în cuplu.<br><br>Te rog să aștepți să se încarce, uneori durează!`,
    link: 'https://sequence-ee5s.onrender.com/',
    btnTextEn: `Play game`,
    btnTextRo: 'Joacă-te'
}



list.push(game1);
list.push(game2);
list.push(game3);
list.push(game4);
list.push(game5);
list.push(game6);
list.push(game7);
list.push(game8);
list.push(game9);
list.push(game10);
list.push(game11);
list.push(game12);
list.push(game13);


let tempHTML = '';
//create the cards:
for (let i=0; i<list.length; i++){
 const flipCardDiv = document.createElement('div');
 flipCardDiv.style.height = "100%"
 flipCardDiv.id = `flipDiv${i+1}`;
 flipCardDiv.className = "flip-card";
 flipCardDiv.innerHTML = `
 <img class="thumbnail" src="library/${list[i].image}" alt="Thumbnail">
                <div class="flip-card-inner">
                    <div class="flip-card-front">

                       <p>${list[i].textEn}</p>
                       <br>
                       
                        <a href="${list[i].link}"><button>${list[i].btnTextEn}</button></a>
                        <img class="smallFlag" src="library/smallEnFlag.jpg">
                    </div>
                    <div class="flip-card-back">
                       
                        <p>${list[i].textRo}</p>
                        <br>
                        
                        <a href="${list[i].link}"><button>${list[i].btnTextRo}</button></a>
                         <img class="smallFlag" src="library/smallRoFlag.jpg">
                    </div>
                </div> 
                `;
 
 mainDiv.appendChild(flipCardDiv);
}


// flip the cards:
let flipDivs = [];
for (let i=1; i<list.length+1; i++){
    flipDivs[i] = document.getElementById(`flipDiv${i}`);
    flipDivs[i].addEventListener('click', function() {
        flipDivs[i].classList.toggle('flipped');
    });
}

const today = new Date();
const currentYear = today.getFullYear();


const copyright = document.getElementById('copyright');
copyright.innerHTML = `Copyright ${currentYear} &copy; Andrei Bogdan Georgescu`;





