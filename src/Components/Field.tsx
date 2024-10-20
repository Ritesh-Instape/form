
import { Input,Form } from "rsuite";
import "../App.css";

type FieldProps = {
  as: React.ElementType;
  field: any ;
  error?: string;
  [key: string]: any;
};




const Field = ({as: Component = Input,field,error, ...rest}: FieldProps) => {
  return (
    <Form.Group className="formdis">
      <Component
        id={field.name}
        type={field.type}
        value={field.value}
        onChange={(value: string) => field.onChange(value)}
        {...rest}
      />
      <p className="errorIs">{error}</p>
    </Form.Group>
  );
};

export default Field;
