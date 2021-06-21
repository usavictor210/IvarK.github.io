// darkness tab
function darknessTabDisplay() {
    document.getElementById("darknessbtn").style.display = player.adBlack.darkwell.unlocked ? "inline-block" : "none";
}

function getDarkness() {
    return new Decimal(player.totalmoney.log(8) / 100);
}

function updateDWDisplay() {
    document.getElementById("wellExtend").className = (player.adBlack.darkwell.darkness.gte(getWellCost())) ? "storebtn" : "unavailablebtn"
}

function updateDarkness() {
    document.getElementById("darknessVal").textContent = getDarkness().toFixed(4);
    darknessTabDisplay();
    updateDWMultiplier();
    updateDWLevel();
    updateDWCost();
    updateDWDisplay();
    displayDE();
    player.adBlack.darkwell.darkness = getDarkness();

    if (player.resets >= 1) {
        // unlock the dark well on your first dimension shift
        unlockDarkWell();
    }
}

