const svg = document.getElementById('Triangles');

svg.onclick = (e) => {
    const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple'];
    const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.cssText = `--pink-color: ${randomColor()}`;
}