import React, { useState } from 'react';
import { Button, Steps, Divider } from 'antd';
import 'antd/dist/antd.css';
import Input1 from './input1';
import Input2 from './input2';
import Input3 from './input3';
import LastContent from './lastContent';
import { useNavigate } from 'react-router-dom';

const { Step } = Steps;
const steps = [
  {
    title: 'First',
    content: <Input1 />,
  },
  {
    title: 'Second',
    content: <Input2 />,
  },
  {
    title: 'Third',
    content: <Input3 />,
  },
  {
    title: 'Finish',
    content: <LastContent />,
  },
];

export default function Progress() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const handleClickNext = () => {
    setCurrent(current + 1);
  };

  const handleClickPrevious = () => {
    setCurrent(current - 1);
  };

  return (
    <div>
      <div>
        <Steps current={current}>
          {steps.map((item, index) => (
            <Step key={index} title={item.title} />
          ))}
        </Steps>
      </div>
      <Divider />

      <div>{steps[current].content}</div>

      <Divider />

      <div>
        {current > 0 && (
          <Button style={{ marginRight: '20px' }} onClick={handleClickPrevious}>
            Previous
          </Button>
        )}

        {current < steps.length - 1 && (
          <Button type="primary" onClick={handleClickNext}>
            Next
          </Button>
        )}

        {current === 3 && (
          <Button type="primary" onClick={() => navigate('/')}>
            Back to Home{' '}
          </Button>
        )}
      </div>
    </div>
  );
}
