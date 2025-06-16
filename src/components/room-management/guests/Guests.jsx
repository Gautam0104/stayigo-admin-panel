import React, { useState } from 'react';
import { Button, Table, Badge, ButtonGroup, Pagination } from 'react-bootstrap';

import SearchBox from 'components/navbar/top/SearchBox';

const guestData = [
  {
    id: '#5644',
    name: 'Alexander',
    room: 'A647',
    total: 467,
    paid: 200,
    status: 'Clean'
  },
  {
    id: '#6112',
    name: 'Pegasus',
    room: 'A456',
    total: 645,
    paid: 250,
    status: 'Dirty'
  },
  {
    id: '#6141',
    name: 'Martin',
    room: 'A645',
    total: 686,
    paid: 400,
    status: 'Dirty'
  },
  {
    id: '#6535',
    name: 'Cecil',
    room: 'A684',
    total: 8413,
    paid: 2500,
    status: 'Inspected'
  },
  {
    id: '#6541',
    name: 'Luke',
    room: 'B464',
    total: 841,
    paid: 400,
    status: 'Clean'
  },
  {
    id: '#9846',
    name: 'Yadrin',
    room: 'C648',
    total: 684,
    paid: 300,
    status: 'Clean'
  },
  {
    id: '#4921',
    name: 'Kiand',
    room: 'D644',
    total: 984,
    paid: 513,
    status: 'Pick up'
  },
  {
    id: '#9841',
    name: 'Turen',
    room: 'B641',
    total: 984,
    paid: 600,
    status: 'Dirty'
  }
];

const getStatusVariant = status => {
  switch (status) {
    case 'Clean':
      return 'primary';
    case 'Dirty':
      return 'danger';
    case 'Inspected':
      return 'success';
    case 'Pick up':
      return 'warning';
    default:
      return 'secondary';
  }
};

const Guests = () => {
  const [search, setSearch] = useState('');
  const [view, setView] = useState('Check in');

  const filteredData = guestData.filter(
    guest =>
      guest.room.toLowerCase().includes(search.toLowerCase()) ||
      guest.name.toLowerCase().includes(search.toLowerCase()) ||
      guest.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Guests</h4>

      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 gap-4">
        <ButtonGroup>
          <Button
            className="me-2 rounded-4"
            variant={view === 'Check in' ? 'primary' : 'outline-primary'}
            onClick={() => setView('Check in')}
          >
            Check in
          </Button>
          <Button
            className="me-2 rounded-4"
            variant={view === 'Check out' ? 'primary' : 'outline-primary'}
            onClick={() => setView('Check out')}
          >
            Check out
          </Button>
        </ButtonGroup>

        <SearchBox
          autoCompleteItem={guestData}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Room</th>
            <th>Total</th>
            <th>Paid</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(guest => (
            <tr key={guest.id}>
              <td>{guest.id}</td>
              <td>{guest.name}</td>
              <td>{guest.room}</td>
              <td>${guest.total}</td>
              <td>${guest.paid}</td>
              <td>
                <Badge bg={getStatusVariant(guest.status)}>
                  {guest.status}
                </Badge>
              </td>
              <td>
                <ButtonGroup size="sm">
                  <Button variant="outline-primary me-2 rounded-2">Edit</Button>
                  <Button variant="outline-danger me-2 rounded-2">
                    Delete
                  </Button>
                  {view === 'Check out' && (
                    <Button variant="outline-success me-2 rounded-2">
                      Check Out
                    </Button>
                  )}
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          Showing {filteredData.length} of {guestData.length} entries
        </div>
        <Pagination>
          <Pagination.Prev disabled />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Next disabled={filteredData.length <= 10} />
        </Pagination>
      </div>
    </div>
  );
};

export default Guests;
