import fs from 'fs';

const indexHtml = fs.readFileSync('../new/index.html', 'utf8');
const stylesCss = fs.readFileSync('../new/styles.css', 'utf8');

// Extract the <style> block from index.html
const styleMatch = indexHtml.match(/<style>([\s\S]*?)<\/style>/);
const inlineStyles = styleMatch ? styleMatch[1] : '';

const newStyles = `
/* Divider styles added */
.image-divider {
    width: 100vw;
    height: 500px;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    overflow: hidden;
}

.image-divider img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

@media (max-width: 900px) {
    .image-divider {
        height: 300px;
    }
}
`;

const combinedStyles = stylesCss + '\n/* Inline styles from index.html */\n' + inlineStyles + newStyles;

fs.writeFileSync('src/App.css', combinedStyles);
console.log('App.css created successfully!');
