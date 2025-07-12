import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import FormLayout from '@/components/FormLayout';
import { inputs } from '@/consts/inputs';
import { AuthButtons } from '@/consts/button';

function LoginPage() {
  const { updateMessageFromPath } = useAuthStore();
  const location = useLocation();
  const loginInputs = inputs.slice(2, 4)
  const signupDetails = {
    inputs: loginInputs, 
    AuthButtons: AuthButtons, 
    title: "Log In",
  }
  
  useEffect(() => {
    updateMessageFromPath(location.pathname);
  }, [location.pathname]);

  return (
    <FormLayout {...signupDetails}/>
  )
}

export default LoginPage
