// https://docs.nativebase.io/default-theme#colors
 const colorList = [
    'Rose', 
    'Pink',
    'Purple',
    'Violet',
    'Indigo',
    'Blue',
    'LightBlue',
    'Cyan',
    'Teal',
    'Emerald',
    'Green',
    'Lime',
    'Yellow',
    'Amber',
    'Orange',
    'Red',
    'WarmGray',
    'TrueGray',
    'Gray',
    'CoolGray',
    'BlueGray'
]

export const genColors = () => {
    // randomPaletteNumber = 100, 200. 300 .... 900

    let randomColor = colorList.random() // colorList.sort(() => Math.random() - 0.5)
    randomColor = randomColor.charAt(0).toLowerCase() + randomColor.slice(1);

    let randomPaletteStartNumber = Math.trunc(_rand(1, 5)) * 100
    let randomPaletteEndNumber = Math.trunc(_rand(5, 9)) * 100

    return [`${randomColor}.${randomPaletteStartNumber}`, `${randomColor}.${randomPaletteEndNumber}`]
}


const _rand = (min, max) =>{
    if (min==null && max==null)
      return 0;    
    
    if (max == null) {
        max = min;
        min = 0;
      }
      return min + Math.floor(Math.random() * (max - min + 1));
    };

Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
  };
  