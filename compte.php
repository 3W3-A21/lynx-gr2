<?php
    $page = 'compte';
    include('inclusions/entete.php');
?>
    <section class="principale">
    <?php if(!isset($_SESSION['uc'])) {  ?>
        <div class="formulaires-utilisateurs">
            <form action="compte.php" method="post">
                <fieldset>
                    <legend><?= $frmLegende; ?></legend>
                    <input type="text" name="courriel" placeholder="<?= $frmCourrielPH; ?>">
                    <input type="password" name="mdp" placeholder="<?= $frmMdpPH; ?>">
                    <input type="submit" value="<?= $frmBoutonConnecter; ?>">
                    
                </fieldset>
                <div class="actions-compte">
                    <span><?= $lienMdpOublie; ?></span>
                    <span><?= $lienNouveauCompte; ?></span>
                </div>
            </form>
            <?php if(isset($erreurConnexion)) : ?>
                <div class="erreur">Erreur de connexion : réessayez!</div>
            <?php endif; ?>
        </div>
    <?php } else { ?>
        <h2>Mes investissements</h2>
    <?php } ?>
    </section>
<?php
    include('inclusions/pied2page.php')
?>