export function capitalizeFirstLetter(string) {
    if (!string) return ""; // Handle empty or undefined strings
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export function getFilteredQuery(query = {}) {
    const filteredQuery = Object.entries(query)
        .reduce((acc, [key, value]) => {
            if (value !== '' && value !== null && value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
    const queryString = Object.keys(filteredQuery)
        .filter(key => (filteredQuery[key] !== '' || filteredQuery[key] !== null)) // Exclude empty values
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(filteredQuery[key])}`)
        .join('&');

    return queryString
}
export function convertBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};
export function getInitialName(name) {
    let initials;
    const nameSplit = name.split(" ");
    const nameLength = nameSplit.length;
    if (nameLength > 1) {
        initials =
            nameSplit[0].substring(0, 1) +
            nameSplit[nameLength - 1].substring(0, 1);
    } else if (nameLength === 1) {
        initials = nameSplit[0].substring(0, 1);
    } else return;
    return initials.toUpperCase();
};
export function createImageFromInitials(size, name, color = getRandomColor()) {
    if (name == null) return;
    name = getInitialName(name)
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    canvas.width = canvas.height = size
    context.fillStyle = "#ffffff"
    context.fillRect(0, 0, size, size)
    context.fillStyle = `${color}50`
    context.fillRect(0, 0, size, size)
    context.fillStyle = color;
    context.textBaseline = 'middle'
    context.textAlign = 'center'
    context.font = `${size / 2}px Roboto`
    context.fillText(name, (size / 2), (size / 2))
    return canvas.toDataURL()
};
export function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
