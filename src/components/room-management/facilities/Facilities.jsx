import React, { useState } from 'react';
import { Table, Button, Badge, ButtonGroup, Pagination } from 'react-bootstrap';
import SearchBox from 'components/navbar/top/SearchBox';

const facilitiesData = [
  { id: '#F001', name: 'WiFi', status: 'Active', addedDate: '2023-01-15' },
  { id: '#F002', name: 'AC', status: 'Active', addedDate: '2023-02-20' },
  { id: '#F003', name: 'TV', status: 'Maintenance', addedDate: '2023-03-10' },
  {
    id: '#F004',
    name: 'Mini Fridge',
    status: 'Active',
    addedDate: '2023-04-05'
  },
  { id: '#F005', name: 'Shower', status: 'Active', addedDate: '2023-05-12' },
  {
    id: '#F006',
    name: 'Swimming Pool',
    status: 'Inactive',
    addedDate: '2023-06-18'
  },
  { id: '#F007', name: 'Gym', status: 'Active', addedDate: '2023-07-22' },
  {
    id: '#F008',
    name: 'Laundry',
    status: 'Maintenance',
    addedDate: '2023-08-30'
  }
];

const getStatusVariant = status => {
  switch (status) {
    case 'Active':
      return 'success';
    case 'Inactive':
      return 'secondary';
    case 'Maintenance':
      return 'warning';
    default:
      return 'primary';
  }
};

const Facilities = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = facilitiesData.filter(
    facility =>
      facility.name.toLowerCase().includes(search.toLowerCase()) ||
      facility.id.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSearch = searchTerm => {
    setSearch(searchTerm);
    setCurrentPage(1); // Reset to first page on new search
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 gap-4">
        <h4>Facilities</h4>

        <div className="d-flex gap-3">
          <div style={{ width: '300px' }}>
            <SearchBox
              autoCompleteItem={facilitiesData}
              placeholder="Search facilities..."
              data={facilitiesData}
              searchFields={['name', 'id']}
              onSearch={handleSearch}
            />
          </div>
          <Button variant="primary ms-4" className="rounded-5">
            Add Facility
          </Button>
        </div>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Facility Name</th>
            <th>Status</th>
            <th>Added Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(facility => (
            <tr key={facility.id}>
              <td>{facility.id}</td>
              <td>{facility.name}</td>
              <td>
                <Badge bg={getStatusVariant(facility.status)}>
                  {facility.status}
                </Badge>
              </td>
              <td>{facility.addedDate}</td>
              <td>
                <ButtonGroup size="sm">
                  <Button variant="outline-primary me-2 rounded-2">Edit</Button>
                  <Button variant="outline-danger me-2 rounded-2">
                    Delete
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          Showing {indexOfFirstItem + 1} to{' '}
          {Math.min(indexOfLastItem, filteredData.length)} of{' '}
          {filteredData.length} entries
        </div>
        <Pagination>
          <Pagination.Prev
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === currentPage}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() =>
              setCurrentPage(prev => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default Facilities;
