// dark essence
function getDarkEssence() {
    return new Decimal(Decimal.floor(player.resets / 2)).pow(player.adBlack.darkwell.darkness.div(0.25).max(1.5));
}

function displayDE() {
    // Managing the button
    var text;
    if (getDarkEssence().gte(1) && player.resets >= 2) {
        text = "Feed the darkness with Dimension Shifts/Boosts to gain " + shorten(getDarkEssence()) + " Dark Essence"
        document.getElementById("quickResetDarkness").className = "storebtn darknessbtn"
    } else {
        text = "You don't meet the requirements to make a donation to the darkness<br>(2 Dimension Shifts required)"
        document.getElementById("quickResetDarkness").className = "unavailablebtn darknessbtn"
    }
    document.getElementById("quickResetDarkness").innerHTML = text;
    
    // Display Dark Essence currency
    document.getElementById("darkEssence1").style.display = (player.adBlack.darkEssence.times > 0) ? "inline-block" : "none";
    document.getElementById("darkEssence1").textContent = "You have " + shortenMoney(player.adBlack.darkEssence.amount) + " Dark Essence.";
}

function darkEssenceReset() {
    if (getDarkEssence().gte(1)) {
        if (confirm("Are you sure you want to reset for Dark Essence? This will reset the darkness and perform a Galaxy tier reset in exchange for Dark Essence.")) {
            player.adBlack.darkEssence.amount = player.adBlack.darkEssence.amount.add(getDarkEssence());
            giveAchievement("Down the Rabbit Hole");
            player.adBlack.darkEssence.times++;
            galaxyReset(true); // force
        }
    }
}