import { useEffect, useState } from "react";
import { object, func } from "prop-types";
import Joi from "joi";

const useFormFullSchema = (initialForm, schema, handleSubmit) => {
  
  const [data, setData] = useState(initialForm);
  const [errors, setErrors] = useState(null);
  const [editedFields,setEditedFields] = useState([]);

  useEffect(() => {
      validateForm();
  },[data]);

  const validateForm = () => {
    const joiObj = Joi.object(schema);
    const { error } = joiObj.validate(data, {abortEarly: false,});
    setErrors(error);
  };

  const handleReset = () => {
    setEditedFields([]);
    setData(initialForm);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if(!errors)
      handleSubmit(data);
  };



  const getErrorMessage = (name) => {
    if (errors == null)
      return "";

    const errorDetail = errors.details.find((detail) => detail.context.key === name );

    if(errorDetail)
      return (isFieldEdited(name) ? errorDetail.message : "");
    else
      return "";

  };

  const handleChange = ({ target }) => {
    
    const newData = ({...data, [target.name]: target.value ,});
    
    if(!editedFields.includes(target.name))
      setEditedFields((prev) => [...prev, target.name]);
    setData(newData);

  };
  
  const isFieldEdited = (name) => editedFields.includes(name);
  const isFormValid = () => Boolean(errors);

  

  return ({
    data,
    getErrorMessage,
    isFieldEdited,
    isFormValid,
    onSubmit,
    handleChange,
    handleReset,
  });
};

useFormFullSchema.propTypes = {
  initialForm: object.isRequired,
  schema: object.isRequired,
  handleSubmit: func.isRequired,
};

export default useFormFullSchema;
