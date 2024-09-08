'use strict';
const table = document.getElementById('Table');
function sortTable(column) {
    const Table = table.querySelector('tbody');
    const rows = Table.querySelectorAll('tr');
    const rowsArray = Array.from(rows);
    rowsArray.sort((a, b) => {
        const A = a.querySelectorAll('td')[column];
        const B = b.querySelectorAll('td')[column];
        const vA = A.textContent.trim();
        const vB = B.textContent.trim();
        if (isNaN(vA) || isNaN(vB)) {
            return vA.localeCompare(vB);
        } else {
            return parseFloat(vA) - parseFloat(vB);
        }
    });
    rowsArray.forEach(row => Table.appendChild(row));
}
const headers = table.querySelectorAll('th');
headers.forEach((header, index) => {
    header.addEventListener('click', () => {
        sortTable(index);
    });
});