// the dark well

function initializeDarkWell() {
    player.adBlack = {
        bestAM: new Decimal(0),
        darkwell: {
            darkness: new Decimal(0),
            level: 0,
            upgrades: [],
            unlocked: false
        },
        darkEssence: {
            amount: new Decimal(0),
            times: 0,
            upgrades: []
        }
    }
}

function unlockDarkWell() {
    if (player.adBlack.darkwell.unlocked == false) {
        if (player.resets > 0) {
            player.adBlack.darkwell.unlocked = true;
            giveAchievement("Something's wrong");
        }
    }
}

function getDarkWellEffect() {
    var first = Math.min(player.adBlack.darkwell.level * 0.01, 0.15)
    return first + 0.1;
}

function updateDWMultiplier() {
    document.getElementById("darkWellMult").textContent = new Decimal(1.6 + getDarkWellEffect()).toFixed(2) + "x";
}

function updateDWLevel() {
    document.getElementById("darkWellLevel").textContent = player.adBlack.darkwell.level;
}

function updateDWCost() {
    document.getElementById("darkWellCost").textContent = formatValue(player.options.notation, getWellCost(), 3, 4);
}

function getWellCost() {
    var level = player.adBlack.darkwell.level;
    return new Decimal(((1.25 ** level)) / 100 + 0.135) ;
}
function extendWell() {
    if (player.adBlack.darkwell.darkness.gte(getWellCost())) {
        player.adBlack.darkwell.level++;
        updateRetroactivePow();
    }
}