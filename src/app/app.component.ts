import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Seat Booking System';
  seats: { row: number; seatNumber: number; isBooked: boolean }[] = [];
  seatCount: number = 0;
  message: string = '';

  constructor() {
    this.initializeSeats();
  }

  // Initialize seats with rows and their booking status
  initializeSeats() {
    for (let row = 1; row <= 12; row++) {
      const seatsPerRow = row === 12 ? 3 : 7; // Last row has 3 seats
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        this.seats.push({ row, seatNumber: seat, isBooked: false });
      }
    }
  }

  // Function to book the seats
  bookSeats() {
    const availableSeats = this.seats.filter((seat) => !seat.isBooked);

    if (availableSeats.length < this.seatCount) {
      this.message = 'Not enough seats available!';
      return;
    }

    let seatsToBook = [];

    // Try to find seats in a single row first
    for (let row = 1; row <= 12; row++) {
      const rowSeats = availableSeats.filter((seat) => seat.row === row);
      if (rowSeats.length >= this.seatCount) {
        seatsToBook = rowSeats.slice(0, this.seatCount);
        break;
      }
    }

    // If no single row has enough seats, book the first available seats
    if (seatsToBook.length === 0) {
      seatsToBook = availableSeats.slice(0, this.seatCount);
    }

    // Mark the seats as booked
    seatsToBook.forEach((seat) => {
      const seatIndex = this.seats.findIndex(
        (s) => s.row === seat.row && s.seatNumber === seat.seatNumber
      );
      this.seats[seatIndex].isBooked = true;
    });

    this.message = `Successfully booked ${this.seatCount} seats!`;
    this.seatCount = 0; // Reset seat count after booking
  }

  // Function to update the seat count based on user input
  updateSeatCount(count: number) {
    this.seatCount = count;
  }
}
