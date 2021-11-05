/** Code pro version 1 (préférable) */
// Attraper tous les boutons 
// ET
// Associer le gestionnaire d'événement à chacun des boutons
document.querySelectorAll('.actions-compte span').forEach(function(btnSpan) {
    btnSpan.addEventListener('click', function() {
        this.closest('form').classList.remove('frm-affiche');
        document.querySelector('.' + this.dataset.formulaire).classList.add('frm-affiche');
    });
});


/** Code pro version 2 */
// Attraper tous les boutons 
// ET
// Associer le gestionnaire d'événement à chacun des boutons
// document.querySelectorAll('.actions-compte span').forEach(function(btnSpan) {
//     btnSpan.addEventListener('click', afficherFormulaire);
// });

// Fonction qui s'occupe de cacher le formulaire courant et de montrer le 
// formulaire de création de compte
// function afficherFormulaire() {
//     this.closest('form').classList.remove('frm-affiche');
//     document.querySelector('.' + this.dataset.formulaire).classList.add('frm-affiche');
// }

/** Code débutant */
// Attraper le bouton (span)
// let btnNouveauCompte = document.querySelector('.actions-compte span.btn-nouveau');
// let btnMdp = document.querySelector('.actions-compte span.btn-mdp');
// let btnConnexion = document.querySelector('.actions-compte span.btn-connexion');


// Lui associer un gestionnaire d'événement
// btnNouveauCompte.addEventListener('click', afficherFormulaire);
// btnMdp.addEventListener('click', afficherFormulaire);
// btnConnexion.addEventListener('click', afficherFormulaire);

