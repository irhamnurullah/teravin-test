import React, { useState } from 'react';
import { Input, Button, Divider, message } from 'antd';

export default function Input2() {
  const [inputList, setInputList] = useState([{ asalSekolah: '' }]);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const addInput = () => {
    setInputList([...inputList, { asalSekolah: '' }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('education', JSON.stringify(inputList));

    if (localStorage.getItem('education')) {
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
                addonBefore="Asal Sekolah"
                type="text"
                placeholder="Asal Sekolah"
                value={item.asalSekolah}
                name="asalSekolah"
                onChange={(e) => handleInputChange(e, index)}
                style={{ marginRight: '20px', marginBottom: '20px' }}
              />
            </div>
          );
        })}
        <Divider />
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </form>
      <Button onClick={addInput}>+</Button>
    </div>
  );
}
