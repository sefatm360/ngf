import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Switch from 'react-switch';
const ToggleSwitch = ({ handleChange, setChecked, checked }: any) => {
  // const [lang, setLang] = useState('en');
  // const [toggleClick, setToggleClick] = useState({
  //   bn: true,
  //   en: false,
  // });

  // const toggleEN = () => {
  //   console.log('clicked en');

  //   setToggleClick({
  //     bn: true,
  //     en: false,
  //   });
  // };
  // const toggleBN = () => {
  //   console.log('clicked bn');
  //   setToggleClick({
  //     bn: false,
  //     en: true,
  //   });
  // };

  const router = useRouter();

  // console.log({ toggleClick });

  return (
    <div className=''>
      {/* <div className='toggle-switch'>
        <div
          onClick={() => toggleEN()}
          className={`inner-btn-en ${toggleClick.en ? 'd-block' : 'd-none'} `}
        ></div>
        <div
          onClick={() => toggleBN()}
          className={`inner-btn-bn ${
            toggleClick.bn ? 'd-block' : 'd-none'
          } d-block`}
        ></div>
      </div> */}
      <label>
        <Switch
          onChange={handleChange}
          checked={checked}
          onColor='#ff1a64'
          onHandleColor='#fff'
          uncheckedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                color: 'white',
                paddingRight: 2,
              }}
            >
              EN
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                color: 'white',
                paddingRight: 2,
              }}
            >
              BN
            </div>
          }
          className='react-switch'
        />
      </label>
    </div>
  );
};

export default ToggleSwitch;
