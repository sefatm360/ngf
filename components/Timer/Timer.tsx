import { useEffect, useState } from 'react';
const Timer = (props: any) => {
  const { initialMinute = 2, initialSeconds = 0, sendOtp } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [minutes, seconds]);

  const handleTimer = () => {
    sendOtp();
    setMinutes(2);
  };

  return (
    <div>
      {minutes === 0 && seconds === 0 ? (
        <p
          onClick={handleTimer}
          className='pointer d-inline text-decoration-underline font-jost'
        >
          resend otp
        </p>
      ) : (
        <p className='font-jost'>
          You cannot resend otp before {minutes}:
          {seconds < 10 ? `0${seconds}` : seconds} minuites
        </p>
      )}
    </div>
  );
};

export default Timer;
