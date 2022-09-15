document.addEventListener("scroll", () => {
  const navbar = document.getElementById("bgNavbar");
  if (document.documentElement.scrollTop > navbar.clientHeight) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("scrolledTop");
  } else {
    navbar.classList.add("scrolledTop");
  }
});

$(document).ready(function () {
  $(this).scrollTop(0);
});

function themeColor(sel) {
  const catText = $(".cat-text");
  if (sel.value == 2) {
    document.body.style.backgroundColor = "#22223b";
    for (let elem of catText) {
      elem.classList.add("dark-theme");
    }
  } else {
    document.body.style.backgroundColor = "#9a8c98";
    for (let elem of catText) {
      elem.classList.remove("dark-theme");
    }
  }
}

function changeLanguage(sel) {
  const menuName = $("#menuName");
  const menuLink = $("#homeLink");
  const menuAbout = $("#aboutLink");
  const titlePage = $("#titleText");
  const kin = $("#aboutTitle");
  const kinText = $("#aboutText");
  const rose = $("#aboutTitleRose");
  const roseText = $("#aboutTextRose");
  const luna = $("#aboutTitleLuna");
  const lunaText = $("#aboutTextLuna");
  const nala = $("#aboutTitleNala");
  const nalaText = $("#aboutTextNala");
  if (sel.value == 2) {
    menuName.text("GATO");
    menuLink.text("INICIO");
    menuAbout.text("SOBRE");
    titlePage.html(
      "<h1>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h1><h1>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h1><h1>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h1><h1>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h1><h1>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h1><h1>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h1><h1>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h1>"
    );
    kin.text("KIN A GATA");
    kinText.text(
      "Bola de pelo peluda e ainda mais peluda. Peço para receber carinho e então mordo a mão do meu dono! Hora do gatinho, Miaaau! Mastigando os cabos, tocando na água com a pata e então pulando de volta no susto, meu siamês me persegue (de uma boa forma). Eu vejo um pássaro e o encaro miando para ele enquanto dou uma reboladinha vem aqui passarinho."
    );
    rose.text("ROSE A GATA");
    roseText.text(
      "Caixa de areia é vida, espalhar terrinha por toda a casa. Abre a porta, me deixa sair, me deixa sair, me deixa sair, me deixa miau, me miau, miaaau! Fazer xixi na cama do humano até que ele limpe minha caixa de areia. Comer muito e então regurgitar tudo no tapete da sala. Gosto de lamber meu bumbum e fazer uma cara estranha. "
    );
    luna.text("LUNA A GATA");
    lunaText.text(
      "Acordar e lamber a patinha acorda dona miau miau. Arranhar a porta e depois ir embora, quatro da manhã acorda dona miaaaaaaaaaaaauuu. Poder gatinho! pisar no seu teclado enquanto você está jogando, me faz carinho, me faz carinho, não me faça carinho, recompensar o humano com uma piscadinha lenta."
    );
    nala.text("NALA A GATA");
    nalaText.text(
      "Me dê um pouco da sua comida  me dê um pouco da sua comida  me dê um pouco da sua comida, meh não quero isso. Me recuso a sair da caixinha de papelão! Por que esconder minha incrivel e artística habilidade de arranhar? Preciso checar o humano, não o vejo faz uma hora, talvez esteja morto, oh veja, o humano está vivo, hiss para o humano, me alimente."
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
  }
}
