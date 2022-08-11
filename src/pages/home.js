import React, { useState, useEffect, Fragment } from 'react';
import { Table, Button } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const [getLocalStorage, setLocalStorage] = useState({});
  const getBiodata = JSON.parse(localStorage.getItem('biodata'));

  useEffect(() => {
    if (getBiodata) {
      setLocalStorage(getBiodata);
    }
  }, []);

  const dataSource = [
    {
      key: '1',
      name: getLocalStorage.name,
      address: getLocalStorage.address,
    },
  ];
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Detail',
      dataIndex: 'details',
      key: 'details',
      render: () => <NavLink to="/details">Details</NavLink>,
    },
  ];

  return (
    <Fragment>
      <Button style={{ marginBottom: '10px' }} type="dashed" onClick={() => navigate('/pengajuan')}>
        + Add Data
      </Button>

      <Table columns={columns} dataSource={dataSource} />
    </Fragment>
  );
}
