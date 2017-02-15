const COLORS = [
    'Black', 'Blue', 'BlueViolet', 'Brown', 'CadetBlue', 'Orchid',
    'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'DarkBlue',
    'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen', 'DarkKhaki',
    'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed',
    'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray',
    'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGrey',
    'DodgerBlue', 'FireBrick', 'ForestGreen', 'Fuchsia', 'Gold', 'Violet',
    'GoldenRod', 'Grey', 'Green', 'GreenYellow', 'HotPink', 'IndianRed',
    'Indigo', 'LawnGreen', 'YellowGreen', 'LightCoral', 'LightSalmon',
    'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LimeGreen',
    'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple',
    'MediumSeaGreen', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed',
    'MidnightBlue', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed',
    'PaleVioletRed', 'Peru', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple',
    'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown',
    'SeaGreen', 'Sienna', 'SkyBlue', 'SlateBlue', 'SlateGray',
    'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Tomato', 'Turquoise'
];

const getRandomColor = () => {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

export default getRandomColor;
