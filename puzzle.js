const Combinacao = {
    'Red+Blue':    { result: 'Purple',   op: (a,b) => a + b,      opName: '+' },
    'Blue+Red':    { result: 'Purple',   op: (a,b) => a + b,      opName: '+' },
    'Red+Yellow':  { result: 'Orange',   op: (a,b) => a - b,      opName: '−' },
    'Yellow+Red':  { result: 'Orange',   op: (a,b) => a - b,      opName: '−' },
    'Red+Green':   { result: 'Brown',    op: (a,b) => a * b,      opName: '×' },
    'Green+Red':   { result: 'Brown',    op: (a,b) => a * b,      opName: '×' },
    'Blue+Yellow': { result: 'Emerald',  op: (a,b) => a / b,      opName: '÷' },
    'Yellow+Blue': { result: 'Emerald',  op: (a,b) => a / b,      opName: '÷' },
    'Yellow+Green':{ result: 'Jade',     op: (a,b) => a ** b,     opName: '^' },
    'Green+Yellow':{ result: 'Jade',     op: (a,b) => a ** b,     opName: '^' },
    'Blue+Green':  { result: 'Cyan',     op: (a,b) => Math.sqrt(a) + Math.sqrt(b), opName: '√' },
    'Green+Blue':  { result: 'Cyan',     op: (a,b) => Math.sqrt(a) + Math.sqrt(b), opName: '√' },
};

const Ciclos = [
    ['Yellow', 'Red',    'Blue',  'Green'],
    ['Red',    'Blue',   'Green', 'Yellow'],
    ['Blue',   'Green',  'Yellow','Red'],
    ['Green',  'Yellow', 'Red',   'Blue'],
];

function getCurrentColor(btnIndex) {
    const mod = ((count[btnIndex] % 4) + 4) % 4;
    return Ciclos[btnIndex][mod];
}

let puzzleTarget = null;
let puzzleCombo  = null;
let puzzleScore  = 0;

function injectPuzzleUI() {
    const resulted = document.getElementById('resulted');
    const div = document.getElementById('puzzle-area');
    resulted.parentNode.insertBefore(div, resulted.nextSibling);
    document.getElementById('puzzle-confirm').addEventListener('click', checkPuzzle);
    document.getElementById('puzzle-give-up').addEventListener('click', revealSolution);
}

function generatePuzzle() {
    const comboKeys = Object.keys(Combinacao);

    let attempts = 0;
    while (attempts < 200) {
        attempts++;

        const key    = comboKeys[Math.floor(Math.random() * comboKeys.length)];
        const combo  = Combinacao[key];
        const [colorA, colorB] = key.split('+');

        const maxVal = (combo.opName === '^') ? 3 : 6;
        const valA   = Math.floor(Math.random() * maxVal) + 1;
        const valB   = Math.floor(Math.random() * maxVal) + 1;

        const raw = combo.op(valA, valB);

        if (!isFinite(raw))          continue;
        if (!Number.isInteger(raw))  continue;
        if (raw < -20 || raw > 100)  continue;

        puzzleTarget = raw;
        puzzleCombo  = { key, combo, colorA, colorB, valA, valB };
        document.getElementById('puzzle-display').innerHTML =
            `Target: <strong style="font-size:28px;color:#fff">${raw}</strong>` +
            `<span style="font-size:14px;color:#aaa;margin-left:12px">
                (tip: use two button and one operator)
            </span>`;

        document.getElementById('puzzle-feedback').textContent = '';
        return;
    }
}

function checkPuzzle() {
    if (puzzleTarget === null) return;

    const vals    = [color[0], color[1], color[2], color[3]];
    const colors  = [0,1,2,3].map(i => getCurrentColor(i));
    const feedback = document.getElementById('puzzle-feedback');
    let found = false
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (i === j) continue;
            const pairKey = `${colors[i]}+${colors[j]}`;
            if (!Combinacao[pairKey]) continue;
            const result = Combinacao[pairKey].op(vals[i], vals[j]);
            if (Math.round(result) === puzzleTarget) {
                found = true;
                break;
            };
        };
        if (found) break;
    }

    if (found) {
        puzzleScore++;
        document.getElementById('puzzle-score').textContent = `Correct: ${puzzleScore}`;
        feedback.style.color = '#4caf50';
        feedback.textContent = 'Right! Next puzzle...';
        setTimeout(() => {
            color = [0,0,0,0];
            count = [0,0,0,0];
            [yellow0, red0, blue0, green0].forEach(el => el.innerHTML = '0');
            sum1(count[0],''); sum2(count[1],''); sum3(count[2],''); sum4(count[3],'');
            generatePuzzle();
        }, 1200);
    } else {
        feedback.style.color = '#e24b4a';
        feedback.textContent = 'Wrong combination, try again!';
    }
}
function revealSolution() {
    if (puzzleTarget === null) return;

    const feedback = document.getElementById('puzzle-feedback');
    feedback.style.color = '#aaa';
    feedback.innerHTML =
        `Solução: <strong style="color:#fff">` +
        `${puzzleCombo.colorA}(${puzzleCombo.valA}) ` +
        `${puzzleCombo.combo.opName} ` +
        `${puzzleCombo.colorB}(${puzzleCombo.valB}) ` +
        `= ${puzzleTarget}</strong>`;

    document.getElementById('puzzle-confirm').disabled = true;
    document.getElementById('puzzle-give-up').disabled = true;

    setTimeout(() => {
        color = [0,0,0,0];
        count = [0,0,0,0];
        [yellow0, red0, blue0, green0].forEach(el => el.innerHTML = '0');
        sum1(count[0],''); sum2(count[1],''); sum3(count[2],''); sum3(count[3],'');
        document.getElementById('puzzle-confirm').disabled = false;
        document.getElementById('puzzle-give-up').disabled = false;
        generatePuzzle();
    }, 2500);
}
document.addEventListener('DOMContentLoaded', function() {
    injectPuzzleUI();
    generatePuzzle();
});