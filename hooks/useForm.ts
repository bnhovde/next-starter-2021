import { useState } from 'react';

/**
 * How to use
    
  const form = useForm({
    initialValues: {},
    validatation: {
      phone: {
        regex: "/^.{6,}$/",
        message: "Ikke gyldig telefonnummer"
      }
    },
    onSubmit: async (values) => {
      await api.call(values);
    },
  });

  <form onSubmit={phoneForm.handleSubmit}>
    <Input
      type="text"
      name="fieldOne"
      onChange={form.handleChange }
      value={orm.values.fieldOne }
    />
    <Input
      type="text"
      name="fieldTwo"
      onChange={form.handleChange }
      value={orm.values.fieldTwo }
    />
    <Button type="submit" />
  </form>

 */

/**
 * Types
 */

type Value = string | number | undefined;
type Fields = { [key: string]: Value };
type ValidationFields = {
  [key: string]: { regex: string | RegExp; message: string; allowEmpty?: boolean };
};
type ErrorFields = { [key: string]: string };
type HtmlInput = { target: HTMLInputElement };
type FormElement = React.FormEvent<HTMLFormElement>;

export type Args = {
  initialValues?: Fields;
  validation?: ValidationFields;
  onSubmit?: (values: Fields) => void;
};

export type Form = {
  values: Fields;
  errors: ErrorFields;
  isTouched: boolean;
  validateForm: () => boolean;
  handleChange: (e: HtmlInput) => void;
  handleChangeManual: (name: string, value: Value) => void;
  handleSubmit: (event: FormElement) => void;
};

/**
 * Hook
 */

function useForm({ initialValues, validation = {}, onSubmit }: Args): Form {
  const [values, updateValues] = useState(Object.assign({}, initialValues));
  const [errors, updateErrors] = useState({});
  const [isTouched, setIsTouched] = useState(false);
  const [isDirty, setDirty] = useState(false);

  /**
   * Validate
   */

  const validate = (name: string, value: Value) => {
    const fieldValidation = validation[name];

    if (fieldValidation) {
      const regex =
        typeof fieldValidation.regex === 'string'
          ? RegExp(fieldValidation.regex)
          : fieldValidation.regex;

      if (!regex.test(String(value))) {
        updateErrors(Object.assign({}, errors, { [name]: fieldValidation.message }));
      } else {
        const updatedErrors = JSON.parse(
          JSON.stringify(Object.assign(errors, { [name]: undefined }))
        );

        updateErrors(updatedErrors);
      }
    }
  };

  /**
   * Handle change
   */

  const handleChange = (e: HtmlInput) => {
    const { name, value } = e.target;

    validate(name, value);

    if (!isTouched) {
      setIsTouched(true);
    }

    updateValues(Object.assign({}, values, { [name]: value }));
  };

  /**
   * Custom Handle change (for non-standard input)
   */

  const handleChangeManual = (name: string, value: Value) => {
    validate(name, value);

    if (!isTouched) {
      setIsTouched(true);
    }

    updateValues(Object.assign({}, values, { [name]: value }));
  };

  /**
   * Validate form
   */

  const validateForm = () => {
    const validateKeys = Object.keys(validation);
    const emptyFields = validateKeys.filter((val) => !values[val] && !validation[val].allowEmpty);

    if (emptyFields.length) {
      console.log('Form missing fields error', emptyFields);

      updateErrors(
        Object.assign(
          {},
          errors,
          emptyFields.reduce((res, curr) => ({ ...res, [curr]: validation[curr].message }), {})
        )
      );

      setDirty(true);
      return false;
    }

    /**
     * Check for errors
     */

    if (Object.keys(errors).length) {
      console.log('Form has error');
      setDirty(true);
      return false;
    }

    return true;
  };

  /**
   * Handle submit
   */

  const handleSubmit = async (e: FormElement) => {
    e.preventDefault();

    setDirty(true);
    const validForm = validateForm();

    validForm && onSubmit && onSubmit(values);
  };

  return {
    values,
    errors: isDirty ? errors : [],
    handleChange,
    handleChangeManual,
    handleSubmit,
    isTouched,
    validateForm,
  };
}

export default useForm;
