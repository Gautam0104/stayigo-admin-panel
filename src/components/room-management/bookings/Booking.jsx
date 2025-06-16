import React from 'react';
import { Table, Button, Badge } from 'react-bootstrap';

const getStatusVariant = status => {
  switch (status) {
    case 'Booked':
      return 'danger';
    case 'Reserved':
      return 'success';
    default:
      return 'secondary';
  }
};

const bookings = [
  {
    bookingId: 'B001',
    guest: 'John Doe',
    room: '#101',
    checkIn: '2025-06-10',
    checkOut: '2025-06-13',
    status: 'Booked'
  },
  {
    bookingId: 'B002',
    guest: 'Jane Smith',
    room: '#102',
    checkIn: '2025-06-11',
    checkOut: '2025-06-15',
    status: 'Reserved'
  }
];

const Bookings = () => (
  <div className="container mt-4">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h4>Bookings</h4>
      <Button className="me-2 rounded-4" variant="primary">
        Add Booking
      </Button>
    </div>

    <Table bordered hover responsive>
      <thead>
        <tr>
          <th>Booking ID</th>
          <th>Guest</th>
          <th>Room</th>
          <th>Check-in</th>
          <th>Check-out</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((b, i) => (
          <tr key={i}>
            <td>{b.bookingId}</td>
            <td>{b.guest}</td>
            <td>{b.room}</td>
            <td>{b.checkIn}</td>
            <td>{b.checkOut}</td>
            <td>
              <Badge bg={getStatusVariant(b.status)}>{b.status}</Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);
export default Bookings;
