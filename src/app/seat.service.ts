import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeatService {
  private seats: { row: number; seatNumber: number; isBooked: boolean }[] = [];

  constructor() {
    this.initializeSeats();
  }

  // Initialize Seats in the Service (Simulate a database)
  private initializeSeats() {
    for (let row = 1; row <= 11; row++) {
      for (let seat = 1; seat <= 7; seat++) {
        this.seats.push({ row, seatNumber: seat, isBooked: false });
      }
    }

    // Add the Last Row with only 3 seats
    for (let seat = 1; seat <= 3; seat++) {
      this.seats.push({ row: 12, seatNumber: seat, isBooked: false });
    }
  }

  // Function to get all seats
  getSeats() {
    return this.seats;
  }

  // Function to book seats
  bookSeats(seatsToBook: { row: number; seatNumber: number }[]) {
    seatsToBook.forEach((seat) => {
      const seatIndex = this.seats.findIndex(
        (s) => s.row === seat.row && s.seatNumber === seat.seatNumber
      );
      if (seatIndex !== -1) {
        this.seats[seatIndex].isBooked = true;
      }
    });
  }
}
