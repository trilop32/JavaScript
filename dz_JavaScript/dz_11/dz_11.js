'use strict';
function generateCalendar() {
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month + 1, 2).getDay();
    const table = document.createElement("table");
    const header = table.insertRow();
    const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    for (let i = 0; i < daysOfWeek.length; i++) {
        const cell = header.insertCell();
        cell.textContent = daysOfWeek[i];
    }
    let row = table.insertRow();
    let dayCount = 1;
    for (let i = 0; i < firstDay; i++) {
        const cell = row.insertCell();
        cell.textContent = "";
    }
    for (let i = firstDay; i < 7; i++) {
        const cell = row.insertCell();
        cell.textContent = dayCount;
        dayCount++;
    }
    while (dayCount <= daysInMonth) {
        row = table.insertRow();

        for (let i = 0; i < 7; i++) {
            const cell = row.insertCell();
            if (dayCount <= daysInMonth) {
                cell.textContent = dayCount;
                dayCount++;
            }
        }
    }
    const calendarDiv = document.getElementById("calendar");
    calendarDiv.innerHTML = "";
    calendarDiv.appendChild(table);
}