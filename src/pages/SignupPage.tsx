import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import FormLayout from '@/components/FormLayout';
import { inputs } from '@/consts/inputs';
import { AuthButtons } from '@/consts/button';

function SignupPage() {
  const { updateMessageFromPath } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    updateMessageFromPath(location.pathname);
  }, [location.pathname]);

  const signupDetails = {
      inputs: inputs, 
      AuthButtons: AuthButtons,  
      title: "Sign Up",
    }
  

  return (
    <FormLayout {...signupDetails}/>
  )
}

export default SignupPage
