import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function LastContent() {
  const [getLocalStorage, setLocalStorage] = useState({});
  const getBiodata = JSON.parse(localStorage.getItem('biodata'));
  const getEducation = JSON.parse(localStorage.getItem('education'));
  const getExperience = JSON.parse(localStorage.getItem('experience'));

  useEffect(() => {
    setLocalStorage({
      biodata: getBiodata,
      education: getEducation,
      experience: getExperience,
    });
  }, []);

  return (
    <>
      <h2>User Detail</h2>
      <div>
        {getLocalStorage.biodata ? (
          <>
            <p>nama : {getLocalStorage.biodata.name}</p>
            <p>phone : {getLocalStorage.biodata.phone}</p>
            <p>address : {getLocalStorage.biodata.address}</p>
          </>
        ) : null}
      </div>

      <h2>Education</h2>
      {getLocalStorage.education
        ? getLocalStorage.education.map((item, index) => {
            return <p key={index}>{item.asalSekolah}</p>;
          })
        : null}

      <h2>Experience</h2>
      {getLocalStorage.experience
        ? getLocalStorage.experience.map((item, index) => {
            return <p key={index}>{item.pengalamanKerja}</p>;
          })
        : null}
    </>
  );
}
