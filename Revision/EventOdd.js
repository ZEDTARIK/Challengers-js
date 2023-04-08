function EventOdd(number) {
    return number % 2 === 0 ? 'Event': 'Odd';
}

console.log(EventOdd(6)); // Event
console.log(EventOdd(7)); // Odd
console.log(EventOdd(121)); // Odd
console.log(EventOdd(80)); // Event