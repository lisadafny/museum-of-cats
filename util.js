function changeLanguage(sel) {
  if (sel.value == 2) {
    document.getElementById("menuName").html = "GATO";
    document.getElementById("homeLink").innerHTML = "INICIO";
    document.getElementById("aboutLink").innerHTML = "SOBRE";
    document.getElementById("titleText").innerHTML =
      "<h2>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h2><h2>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h2><h2>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h2><h2>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h2><h2>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h2><h2>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h2><h2>MIAU <span>&#128062;&#xfe0e;</span> MIAU</h2>";
    document.getElementById("aboutTitle").innerHTML = "KIN A GATA";
    document.getElementById("aboutText").innerHTML =
      "Bola de pelo peluda e ainda mais peluda. Peço para receber carinho e então mordo a mão do meu dono! Hora do gatinho, Miaaau! Mastigando os cabos, tocando na água com a pata e então pulando de volta no susto, meu siamês me persegue (de uma boa forma). Eu vejo um pássaro e o encaro miando para ele enquanto dou uma reboladinha vem aqui passarinho.";
    document.getElementById("aboutTitleRose").innerHTML = "ROSE A GATA";
    document.getElementById("aboutTextRose").innerHTML =
      "Caixa de areia é vida, espalhar terrinha por toda a casa. Abre a porta, me deixa sair, me deixa sair, me deixa sair, me deixa miau, me miau, miaaau! Fazer xixi na cama do humano até que ele limpe minha caixa de areia. Comer muito e então regurgitar tudo no tapete da sala. Gosto de lamber meu bumbum e fazer uma cara estranha. ";
  } else {
    document.getElementById("menuName").innerHTML = "CAT";
    document.getElementById("homeLink").innerHTML = "HOME";
    document.getElementById("aboutLink").innerHTML = "ABOUT";
    document.getElementById("titleText").innerHTML =
      "<h2>MEOW <span>&#128062;&#xfe0e;</span> MEOW</h2><h2>MEOW <span>&#128062;&#xfe0e;</span> MEOW</h2><h2>MEOW <span>&#128062;&#xfe0e;</span> MEOW</h2><h2>MEOW <span>&#128062;&#xfe0e;</span> MEOW</h2><h2>MEOW <span>&#128062;&#xfe0e;</span> MEOW</h2><h2>MEOW <span>&#128062;&#xfe0e;</span> MEOW</h2><h2>MEOW <span>&#128062;&#xfe0e;</span> MEOW</h2>";
    document.getElementById("aboutTitle").innerHTML = "KIN THE CAT";
    document.getElementById("aboutText").innerHTML =
      "Furrier and even more furrier hairball. Ask to be pet then attack owners hand! Kitty time, Meooooow! Meow chew on cable, touch water with paw then recoil in horror, my siamese stalks me (in a good way). I see a bird I stare at it I meow at it I do a wiggle come here birdy.";
    document.getElementById("aboutTitleRose").innerHTML = "ROSE THE CAT";
    document.getElementById("aboutTextRose").innerHTML =
      "Litter box is life, spread kitty litter all over the house. Open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! Pee in human's bed until he cleans the litter box. Eat too much then proceed to regurgitate all over the living room carpet. I lick butt and make a weird face.";
  }
}
