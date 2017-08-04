/************************** DB MODELS ********************************/
/************** DB MODEL: Character ****************/

let character = function(id, name, avatar, skills, variables, inventory) {
  this.id = id;
  this.name = name;
  this.avatar = avatar || '';
  this.skills = skills || {};
  this.variables = variables || {},4
  this.inventory = inventory || [];
}

/************** DB MODEL: Chapter ****************/

let chapter = function(id, title, text, quote, options, sounds) {
  this.id = id;
  this.title = title || '';
  this.text = text || '';
  this.quote = quote || '';
  this.options = options || {};
  this.sounds = sounds || {};
}


/************** DB MODEL: variables  ****************/

let variable = function(id, key, val) {
  this.id = id;
  this.key = key || '';
  this.val = val || '';
}


/************************** DATA  ********************************/

export const tables = {
   data: 'id, key, value',
   characters: 'id, name, avatar, skills, variables, inventory',
   chapters: 'id, title, text, options'
 }

export const characters = [
  new character(1, 'Jack Flanagan', '', { strength: 7, dexterity: 6, acrobatics: 5, condition: 6, shooting: 6, combat: 6, defence: 6, driving: 7, weapons: 6, lockpicking: 4, swimming: 6}, { liked: 50, respected: 50 })
]

export const chapters = [
  new chapter(1, 'Witamy!', 'Lorem Ipsum', '')
]

export const data = [
  new variable(1, 'activeChapter', '1')
]
