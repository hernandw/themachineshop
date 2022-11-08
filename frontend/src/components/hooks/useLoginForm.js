import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialForm = {
 email: '',
 password: '',
};

export const useLoginForm = () => {
 const [form, setForm] = useState(initialForm);
 const [errors, setErrors] = useState({});
 const [loading, setLoading] = useState(false);
 const [responseMessage, setResponseMessage] = useState(false);

 const navigate = useNavigate();

 const validateForm = (form, target) => {
  let errors = {};
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexPassword = /^.{6,12}$/; // 6 to 12 digits

  const emailValidation = () => {
   if (!form.email.trim()) {
    errors.email = 'El correo electrónico no puede estar vacío';
   } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'Parece que esto no es un correo electrónico.';
   } else {
    errors.email = true;
   }
  };

  const passwordValidation = () => {
   if (!form.password.trim()) {
    errors.password = 'La contraseña no puede estar vacía';
   } else if (!regexPassword.test(form.password.trim())) {
    errors.password = 'La contraseña debe contener mínimo 6 dígitos, máximo 12';
   } else {
    errors.password = true;
   }
  };

  const validateAll = () => {
   emailValidation();
   passwordValidation();
  };

  const selectValidation = (target) => {
   const validations = {
    email: emailValidation,
    password: passwordValidation,
    undefined: validateAll,
   };

   const select = validations[target];

   return select();
  };

  selectValidation(target);

  return errors;
 };

 const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({
   ...form,
   [name]: value,
  });
 };

 const handleBlur = (e) => {
  const target = e.target.name;
  const objKey = Object.keys(validateForm(form, target));
  const objValue = Object.values(validateForm(form, target));
  setErrors({
   ...errors,
   [objKey[0]]: objValue[0],
  });
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setResponseMessage(false);
  setErrors(validateForm(form, undefined));

  if (errors.email === true && errors.password === true) {
   setLoading(true);

   try {
    const request = await axios.post(
     'https://railtest-production-6aaf.up.railway.app/api/signIn',
     {
      email: form.email,
      password: form.password,
     },
     { withCredentials: true }
    );

    const response = request;
    navigate('/');
    console.log(response);
   } catch (error) {
    setLoading(false);
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 403) setResponseMessage(message);
   }
  }

  setLoading(false);
 };

 return {
  form,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  loading,
  responseMessage,
 };
};
