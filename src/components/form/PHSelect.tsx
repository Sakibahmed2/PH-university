import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TSelectProps = {
  label: string;
  name: string;
  option: { value: string; label: string; disabled?: boolean }[];
};

const PHSelect = ({ label, name, option }: TSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Select style={{ width: "100%" }} {...field} options={option} />
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
