import { Form, Select } from "antd";

const PHSelect = ({ label }) => {
  return (
    <Form.Item label={label}>
      <Select
        style={{ width: "100%" }}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
    </Form.Item>
  );
};

export default PHSelect;
