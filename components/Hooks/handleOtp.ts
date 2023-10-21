import { url } from '../Helpers/Constant';

const handleOtp = ({
  phone,
  handleOtpRoute,
  setError,
  type,
  route,
  user,
  setIsLoading,
}: any) => {
  const sendOtpData: any = { phone: Number(phone) };
  if (user) {
    sendOtpData.user = user;
  }

  fetch(`${url}/api/otp/send/${type}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(sendOtpData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        setError('');
        setIsLoading(false);
        handleOtpRoute(route);
      } else {
        setError(data.message);
        setIsLoading(false);
      }
    });
};

export default handleOtp;
