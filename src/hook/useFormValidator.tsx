import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const useFormValidator = (defaultValues: any, emailRequired: boolean = true) => {
  const schema = yup.object({
    name: yup.string().required("Ім'я є обов'язковим").min(3, "Ім'я повинно містити мінімум 3 символи"),
    tel: yup
      .string()
      .required("Телефон є обов'язковим")
      .matches(/^\+380\d{9}$/, 'Введіть український номер телефону'),
    email: yup
      .string()
      .email('Введіть коректний email')
      .when([], {
        is: () => emailRequired,
        then: (schema) => schema.required("Email є обов'язковим"),
        otherwise: (schema) => schema.optional(),
      }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    trigger,
    setFocus,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues,
  });

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    isSubmitted,
    trigger,
    setFocus,
  };
};

export default useFormValidator;
