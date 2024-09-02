'use strict';
function Car(manufacturer, model, year, speed) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.speed = speed;
    this.info = function () {
        return `Производитель: ${this.manufacturer}, Модель: ${this.model}, Год выпуска: ${this.year}, Средняя скорость: ${this.speed} км/ч`;
    };
    this.travelTime = function (distance) {
        let totalTime = distance / this.speed;
        let breakTime = Math.floor(totalTime / 5) + 1; // 1 час перерыва каждые 4 часа
        return `Затраченое время на преодоление ${distance} км: ${(totalTime + breakTime).toFixed(1)} ч`;
    };
    this.toString = function () {
        return `1. ${this.manufacturer} ${this.model}, ${this.year}`;
    };
}

class CarClass {
    constructor(manufacturer, model, year, speed) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.speed = speed;
    }
    info() {
        return `Производитель: ${this.manufacturer}, Модель: ${this.model}, Год выпуска: ${this.year}, Средняя скорость: ${this.speed} км/ч`;
    }
    travelTime(distance) {
        let totalTime = distance / this.speed;
        let breakTime = Math.floor(totalTime / 5) + 1; // 1 час перерыва каждые 4 часа
        return `Затраченое время на преодоление ${distance} км: ${(totalTime + breakTime).toFixed(1)} ч`;
    }
    toString() {
        return `2. ${this.manufacturer} ${this.model}, ${this.year}`;
    }
}
let car1 = new Car("Toyota", "Camry", 2020, 120);
let car2 = new CarClass("Honda", "Civic", 2021, 110);
document.getElementById("car1").textContent=car1.toString();
document.getElementById("car2").textContent=car2.toString();
document.getElementById("cari").textContent=car1.info();
document.getElementById("cartime").textContent=car1.travelTime(500);
document.getElementById("car2i").textContent=car2.info();
document.getElementById("car2time").textContent=car2.travelTime(400);

