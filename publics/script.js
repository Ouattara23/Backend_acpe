document.addEventListener('DOMContentLoaded', function() {
       const hamburger = document.querySelector('.block.md\\:hidden i'); // Sélectionne l'icône du menu hamburger
       const navMenu = document.querySelector('.hidden.md\\:flex'); // Sélectionne la liste des liens de navigation
             
             hamburger.addEventListener('click', function() {
             navMenu.classList.toggle('hidden'); // Bascule la visibilité du menu
             navMenu.classList.toggle('flex'); // Bascule l'affichage en flex pour les mobiles
             
             // Bascule l'icône entre le menu hamburger et la croix
             if (hamburger.classList.contains('fa-bars')) {
               hamburger.classList.remove('fa-bars');
               hamburger.classList.add('fa-xmark');
              } else {
                   hamburger.classList.remove('fa-xmark');
                   hamburger.classList.add('fa-bars');
                 }
               });
            });