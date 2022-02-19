import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { useRouter } from "next/router";
import http from "../../services/httpService";
import Input from "./Input";
import Select from "./Select";

//FIX ISSUE WITH useNavigate!!!!!!!

const Form = ({
  formName,
  initialData,
  formLayout,
  buttonLabel,
  schema,
  populatedForm,
  submitAction,
}) => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  //const navigate = useNavigate();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const onMount = () => {
      if (id === "new") return;
      setData(populatedForm);
    };

    onMount();
  }, [id, populatedForm]);

  const renderInput = (name, label, type = "text") => {
    return (
      <Input
        key={name}
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={handleChange}
        error={errors[name]}
      />
    );
  };

  const renderSelect = (name, label, options) => {
    return (
      <Select
        key={name}
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={handleChange}
        error={errors[name]}
      />
    );
  };

  const renderButton = (label) => {
    return (
      <button disabled={validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = schema.validate(data, options);

    if (!error) return null;

    const newErrors = {};
    for (let item of error.details) newErrors[item.path[0]] = item.message;

    return newErrors;
  };

  const validateProperty = ({ name, value }) => {
    const propertySchema = Joi.object({
      [name]: schema.extract([name]),
    });
    const obj = { [name]: value };
    const { error } = propertySchema.validate(obj);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const newErrors = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) newErrors[input.name] = errorMessage;
    else delete newErrors[input.name];
    setErrors(newErrors);

    const newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors || {});
    if (newErrors) return;

    doSubmit();
  };

  const doSubmit = async () => {
    await submitAction(data);

    //navigate("/movies");
  };

  return (
    <>
      <h1>{formName}</h1>
      <form onSubmit={handleSubmit}>
        {formLayout.map((prop) => {
          if (prop[0] === "input")
            return renderInput(prop[1], prop[2], prop[3]);
          else if (prop[0] === "select")
            return renderSelect(prop[1], prop[2], prop[3]);
        })}
        {renderButton(buttonLabel)}
      </form>
    </>
  );
};

export default Form;
