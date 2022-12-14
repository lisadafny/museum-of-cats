$(document).ready(function () {
  $(this).scrollTop(0);
  changeLanguage($("selChangeLanguage"));
  catAboutDinamic();
});

document.addEventListener("scroll", () => {
  const navbar = document.getElementById("bgNavbar");
  if (document.documentElement.scrollTop > navbar.clientHeight) {
    $(navbar).addClass("scrolled");
    $(navbar).removeClass("scrolledTop");
  } else {
    $(navbar).addClass("scrolledTop");
  }
});

function themeColor(sel) {
  const catText = $(".cat-text");
  if (sel.value == 2) {
    $("body").css({ background: "#22223b" });
    for (let elem of catText) {
      $(elem).addClass("dark-theme");
    }
  } else {
    $("body").css({ background: "#9a8c98" });
    for (let elem of catText) {
      $(elem).removeClass("dark-theme");
    }
  }
}

function catAboutDinamic() {
  let catAboutPic = $(".cat-about-pic");
  let catAboutText = $(".cat-about-text");
  for (let i in catAboutPic) {
    catAboutPic[i].onclick = function () {
      $(catAboutPic[i]).toggleClass("active");
      $(catAboutText[i]).toggleClass("show");
    };
  }
}

function changeToAboutSection() {
  $("#homePage").addClass("d-none");
  $("#aboutPage").removeClass("d-none");
}

function changeToHomeSection() {
  $("#homePage").removeClass("d-none");
  $("#aboutPage").addClass("d-none");
}

function changeLanguage(sel) {
  const menuName = $("#menuName");
  const menuLink = $("#homeLink");
  const menuAbout = $("#aboutLink");
  const titlePage = $("#titleText");
  const kin = $("#homeTitle");
  const kinText = $("#homeText");
  const rose = $("#homeTitleRose");
  const roseText = $("#homeTextRose");
  const luna = $("#homeTitleLuna");
  const lunaText = $("#homeTextLuna");
  const nala = $("#homeTitleNala");
  const nalaText = $("#homeTextNala");
  const aboutTitle = $("#aboutSectionTitle");
  const kinAbout = $("#kinAboutText");
  const roseAbout = $("#roseAboutText");
  const lunaAbout = $("#lunaAboutText");
  const nalaAbout = $("#nalaAboutText");
  if (sel.value == 2) {
    menuName.text("GATO");
    menuLink.text("INICIO");
    menuAbout.text("SOBRE");
    titlePage.html(
      "<h1>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h1><h1>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h1><h1>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h1><h1>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h1><h1>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h1><h1>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h1><h1>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h1>"
    );
    kin.text("KIN A GATA");
    kinText.text(
      "Bola de pelo peluda e ainda mais peluda. Pe??o para receber carinho e ent??o mordo a m??o do meu dono! Hora do gatinho, Miaaau! Mastigando os cabos, tocando na ??gua com a pata e ent??o pulando de volta no susto, meu siam??s me persegue (de uma boa forma). Eu vejo um p??ssaro e o encaro miando para ele enquanto dou uma reboladinha vem aqui passarinho."
    );
    rose.text("ROSE A GATA");
    roseText.text(
      "Caixa de areia ?? vida, espalhar terrinha por toda a casa. Abre a porta, me deixa sair, me deixa sair, me deixa sair, me deixa miau, me miau, miaaau! Fazer xixi na cama do humano at?? que ele limpe minha caixa de areia. Comer muito e ent??o regurgitar tudo no tapete da sala. Gosto de lamber meu bumbum e fazer uma cara estranha. "
    );
    luna.text("LUNA A GATA");
    lunaText.text(
      "Acordar e lamber a patinha acorda dona miau miau. Arranhar a porta e depois ir embora, quatro da manh?? acorda dona miaaaaaaaaaaaauuu. Poder gatinho! pisar no seu teclado enquanto voc?? est?? jogando, me faz carinho, me faz carinho, n??o me fa??a carinho, recompensar o humano com uma piscadinha lenta."
    );
    nala.text("NALA A GATA");
    nalaText.text(
      "Me d?? um pouco da sua comida  me d?? um pouco da sua comida  me d?? um pouco da sua comida, meh n??o quero isso. Me recuso a sair da caixinha de papel??o! Por que esconder minha incrivel e art??stica habilidade de arranhar? Preciso checar o humano, n??o o vejo faz uma hora, talvez esteja morto, oh veja, o humano est?? vivo, hiss para o humano, me alimente."
    );
    aboutTitle.text("Clique em um gatinho para conhece-lo melhor");
    kinAbout.html(
      "Idade: 4 anos<br>Anivers??rio: 27/07<br>Cor favorita: nenhuma"
    );
    roseAbout.html("Idade: 1 ano<br>Anivers??rio: ???<br>Cor favorita: nenhuma");
    lunaAbout.html(
      "Idade: 2 anos<br>Anivers??rio: 29/08<br>Cor favorita: nenhuma"
    );
    nalaAbout.html(
      "Idade: 2 anos<br>Anivers??rio: 05/05<br>Cor favorita: nenhuma"
    );
  } else {
    menuName.text("CAT");
    menuLink.text("HOME");
    menuAbout.text("ABOUT");
    titlePage.html(
      "<h1>MEOW <span>&#128062;&#xfe0e;</span> MEOW</h1><h1>MEOW <span>&#128062;&#xfe0e;</span> MEOW</h1><h1>MEOW <span>&#128062;&#xfe0e;</span> MEOW</h1><h1>MEOW <span>&#128062;&#xfe0e;</span> MEOW</h1><h1>MEOW <span>&#128062;&#xfe0e;</span> MEOW</h1><h1>MEOW <span>&#128062;&#xfe0e;</span> MEOW</h1><h1>MEOW <span>&#128062;&#xfe0e;</span> MEOW</h1>"
    );
    kin.text("KIN THE CAT");
    kinText.text(
      "Furrier and even more furrier hairball. Ask to be pet then attack owners hand! Kitty time, Meooooow! Meow chew on cable, touch water with paw then recoil in horror, my siamese stalks me (in a good way). I see a bird I stare at it I meow at it I do a wiggle come here birdy."
    );
    rose.text("ROSE THE CAT");
    roseText.text(
      "Litter box is life, spread kitty litter all over the house. Open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! Pee in human's bed until he cleans the litter box. Eat too much then proceed to regurgitate all over the living room carpet. I lick butt and make a weird face."
    );
    luna.text("LUNA THE CAT");
    lunaText.text(
      "Wake up lick paw wake up owner meow meow. Scratch at the door then walk away, but at four in the morning wake up owner meeeeeeooww. Kitty power step on your keyboard while you're gaming, pet me pet me don't pet me,  reward the chosen human with a slow blink."
    );
    nala.text("NALA THE CAT");
    nalaText.text(
      "Give me some of your food give me some of your food give me some of your food meh, I don't want it. Refuse to leave cardboard box! Why hide my amazing artistic clawing skills? Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me."
    );
    aboutTitle.text("Click on a cat to learn more!");
    kinAbout.html("Age: 4 years<br>Birthday: 27/07<br>Favorite color: none");
    roseAbout.html("Age: 1 year<br>Birthday: ???<br>Favorite color: none");
    lunaAbout.html("Age: 2 years<br>Birthday: 29/08<br>Favorite color: none");
    nalaAbout.html("Age: 2 years<br>Birthday: 05/05<br>Favorite color: none");
  }
}
