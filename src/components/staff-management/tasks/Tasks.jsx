import React, { useState } from 'react';
import { Button, Badge, Table, ButtonGroup, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const tasksList = [
  {
    id: 'T001',
    title: 'Clean Room #101',
    assignedTo: 'Bob Johnson',
    priority: 'High',
    deadline: '2025-06-17',
    status: 'Pending'
  },
  {
    id: 'T002',
    title: 'Check inventory',
    assignedTo: 'Alice Smith',
    priority: 'Medium',
    deadline: '2025-06-18',
    status: 'In Progress'
  },
  {
    id: 'T003',
    title: 'Update booking software',
    assignedTo: 'David Kim',
    priority: 'Low',
    deadline: '2025-06-20',
    status: 'Completed'
  },
  {
    id: 'T004',
    title: 'Restock towels',
    assignedTo: 'Eve White',
    priority: 'High',
    deadline: '2025-06-16',
    status: 'Pending'
  }
];

const getStatusVariant = status => {
  switch (status) {
    case 'Pending':
      return 'warning';
    case 'In Progress':
      return 'primary';
    case 'Completed':
      return 'success';
    default:
      return 'light';
  }
};

const getPriorityVariant = priority => {
  switch (priority) {
    case 'High':
      return 'danger';
    case 'Medium':
      return 'info';
    case 'Low':
      return 'secondary';
    default:
      return 'light';
  }
};

const Tasks = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredTasks = tasksList.filter(task => {
    if (filter === 'All') return true;
    return task.status === filter;
  });

  const goAddTask = () => {
    navigate('/staff-management/add-task');
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Tasks</h4>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <ButtonGroup>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'All' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('All')}
          >
            All Tasks
          </Button>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'Pending' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Pending')}
          >
            Pending
          </Button>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'In Progress' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('In Progress')}
          >
            In Progress
          </Button>
          <Button
            className="me-2 rounded-4"
            variant={filter === 'Completed' ? 'primary' : 'outline-primary'}
            onClick={() => setFilter('Completed')}
          >
            Completed
          </Button>
        </ButtonGroup>

        <Button className="rounded-4" variant="primary" onClick={goAddTask}>
          Add Task
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Title</th>
            <th>Assigned To</th>
            <th>Priority</th>
            <th>Deadline</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, idx) => (
            <tr key={idx}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.assignedTo}</td>
              <td>
                <Badge bg={getPriorityVariant(task.priority)}>
                  {task.priority}
                </Badge>
              </td>
              <td>{task.deadline}</td>
              <td>
                <Badge bg={getStatusVariant(task.status)}>{task.status}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-end">
        <Pagination>
          <Pagination.Prev disabled />
          {[...Array(2)].map((_, i) => (
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

export default Tasks;
