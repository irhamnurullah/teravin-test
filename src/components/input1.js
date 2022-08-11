import { useEffect, useState } from 'react';
import { Input, Button, Divider, message } from 'antd';

function Input1() {
  const [field, setField] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    setField({
      ...field,
      [e.target.name]: e.target.value,
    });

    if (field.name && field.address && field.phone) {
      setDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('biodata', JSON.stringify(field));

    if (localStorage.getItem('biodata')) {
      setField({
        name: '',
        address: '',
        phone: '',
      });
      message.success('Data berhasil disimpan');
    }
  };

  return (
    <div style={{ width: '500px' }}>
      <form onSubmit={handleSubmit}>
        <label>
          Nama <span style={{ color: 'red' }}> * </span>
        </label>
        <Input onChange={handleChange} type="text" name="name" />
        <br />
        <label>Alamat</label>
        <Input onChange={handleChange} type="text" name="address" />
        <br />
        <label>
          No HP <span style={{ color: 'red' }}> * </span>{' '}
        </label>
        <Input onChange={handleChange} type="number" name="phone" required />
        <br />
        <Divider />
        <Button type="primary" htmlType="submit" disabled={disabled}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Input1;
