import React, { useState } from 'react';
import { Input, Button, Divider, message } from 'antd';

export default function Input3() {
  const [inputList, setInputList] = useState([{ pengalamanKerja: '' }]);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const addInput = () => {
    setInputList([...inputList, { pengalamanKerja: '' }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('experience', JSON.stringify(inputList));

    if (localStorage.getItem('experience')) {
      message.success('Data berhasil disimpan');
    }
  };

  return (
    <div style={{ display: 'flex', marginRight: '20px' }}>
      <form onSubmit={handleSubmit}>
        {inputList.map((item, index) => {
          return (
            <div key={index}>
              <Input
                addonBefore="Pengalaman Kerja"
                type="text"
                placeholder="Pengalaman Kerja"
                value={item.pengalamanKerja}
                name="pengalamanKerja"
                onChange={(e) => handleInputChange(e, index)}
                style={{ marginRight: '20px', marginBottom: '20px' }}
              />
            </div>
          );
        })}
        <Divider />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </form>

      <div>
        <Button onClick={addInput}>+</Button>
      </div>
    </div>
  );
}
