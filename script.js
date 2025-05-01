const creatureID = document.getElementById('creature-id');
const creatureName = document.getElementById('creature-name');
const type = document.getElementById('types');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');
const scare = document.getElementById('scare');

const getCreature = async () => {
  try {
    const creatureNameOrId = searchInput.value.toLowerCase();
    const response = await fetch(
      `https://rpg-creature-api.freecodecamp.rocks/api/creature/${creatureNameOrId}`
    );
    
    const data = await response.json();
		
		// Scare user
    scare.innerHTML = `<b>BOO! </b>A wild ${data.name.toUpperCase()} appears...`;

    // Set Creature info
    creatureName.innerHTML = `<b>Monster: </b>${data.name.toUpperCase()}`;
    creatureID.innerHTML = `<b>ID: </b>${data.id}`;
    weight.innerHTML = `<b>Weight: </b>${data.weight}`;
    height.innerHTML = `<b>Height: </b>${data.height}`;

    // Set stats
    hp.innerHTML = `<b>HP: </b>${data.stats[0].base_stat}`;
    attack.innerHTML = `<b>Attack: </b>${data.stats[1].base_stat}`;
    defense.innerHTML = `<b>Defense: </b>${data.stats[2].base_stat}`;
    specialAttack.innerHTML = `<b>Special Attack: </b>${data.stats[3].base_stat}`;
    specialDefense.innerHTML = `<b>Special Defense: </b>${data.stats[4].base_stat}`;
    speed.innerHTML = `<b>Speed: </b>${data.stats[5].base_stat}`;

    // Set types
    type.innerHTML = `<b>Type: </b>` + data.types
      .map(obj => `<span class="type ${obj.name}">${obj.name}</span>`)
      .join(' ');
  } catch (err) {
    resetDisplay();
    alert('Creature not found');
    console.log(`Creature not found: ${err}`);
  }
};

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  getCreature();
});


