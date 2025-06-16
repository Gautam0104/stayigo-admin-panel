import React, { useState } from 'react';
import { Button, Badge, Table, ButtonGroup, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const roomList = [
  {
    number: '#001',
    type: 'Double bed',
    floor: 'Floor - 1',
    facility: 'AC, shower, Double bed, towel bathtub, TV',
    status: 'Available'
  },
  {
    number: '#002',
    type: 'Single bed',
    floor: 'Floor -2',
    facility: 'AC, shower, Double bed, towel bathtub, TV',
    status: 'Booked'
  },
  {
    number: '#003',
    type: 'VIP',
    floor: 'Floor -1',
    facility: 'AC, shower, Double bed, towel bathtub, TV',
    status: 'Booked'
  },
  {
    number: '#004',
    type: 'VIP',
    floor: 'Floor -1',
    facility: 'AC, shower, Double bed, towel bathtub, TV',
    status: 'Reserved'
  },
  {
    number: '#005',
    type: 'Single bed',
    floor: 'Floor -1',
    facility: 'AC, shower, Double bed, towel bathtub, TV',
    status: 'Reserved'
  },
  {
    number: '#006',
    type: 'Double bed',
    floor: 'Floor -2',
    facility: 'AC, shower, Double bed, towel bathtub, TV',
    status: 'Waitlist'
  },
  {
    number: '#007',
    type: 'Double bed',
    floor: 'Floor -3',
    facility: 'AC, shower, Double bed, towel bathtub, TV',
    status: 'Reserved'
  },
  {
    number: '#008',
    type: 'Single bed',
    floor: 'Floor -5',
    facility: 'AC, shower, Double bed, towel bathtub, TV',
    status: 'Blocked'
  }
];

const getStatusVariant = status => {
  switch (status) {
    case 'Available':
      return 'primary';
    case 'Booked':
      return 'danger';
    case 'Reserved':
      return 'success';
    case 'Waitlist':
      return 'warning';
    case 'Blocked':
      return 'secondary';
    default:
      return 'light';
  }
};

const Room = () => {
  const [filter, setFilter] = useState('All');

  const filteredRooms = roomList.filter(room => {
    if (filter === 'All') return true;
    if (filter === 'Available') return room.status === 'Available';
    if (filter === 'Booked') return room.status === 'Booked';
    return true;
  });
  const navigate = useNavigate();
  const goAddroom = () => {
    navigate(`/room-management/addroom`);
  };
  return (
    <div className="container mt-4">
      <h4 className="mb-3">Room</h4>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <ButtonGroup>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'All' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('All')}
          >
            All room (100)
          </Button>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'Available' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Available')}
          >
            Available room (20)
          </Button>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'Booked' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Booked')}
          >
            Booked (80)
          </Button>
        </ButtonGroup>

        <Button
          className="me-2 rounded-4"
          variant="primary"
          onClick={goAddroom}
        >
          Add room
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Room number</th>
            <th>Bed type</th>
            <th>Room floor</th>
            <th>Room facility</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredRooms.map((room, idx) => (
            <tr key={idx}>
              <td>{room.number}</td>
              <td>{room.type}</td>
              <td>{room.floor}</td>
              <td>{room.facility}</td>
              <td>
                <Badge bg={getStatusVariant(room.status)}>{room.status}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-end">
        <Pagination>
          <Pagination.Prev disabled />
          {[...Array(7)].map((_, i) => (
            <Pagination.Item key={i} active={i === 0}>
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
};

export default Room;
