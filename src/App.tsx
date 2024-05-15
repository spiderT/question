import React, { useState } from "react";
import { Form, Input, InputNumber, DatePicker, Select, Switch } from "antd";
import "./App.css";

interface Options {
  [index: string]: {
    label: string;
    component: React.ReactElement;
  };
}

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [type, setType] = useState<string>("input");

  const formstyle = { width: 160 };

  const TYPE_MAP: Options = {
    input: {
      label: "输入框",
      component: <Input style={formstyle} />,
    },
    inputNumber: {
      label: "数字输入框",
      component: <InputNumber style={formstyle} />,
    },
    select: {
      label: "选择器",
      component: <Select style={formstyle} showSearch />,
    },
    datePicker: {
      label: "日期选择框",
      component: <DatePicker style={formstyle} />,
    },
    switch: {
      label: "开关",
      component: <Switch />,
    },
  };

  const seletOptions = Object.keys(TYPE_MAP).map((item) => ({
    value: item,
    label: TYPE_MAP[item].label,
  }));

  console.log("seletOptions", seletOptions);

  return (
    <>
      <p>
        <span className="label">类型</span>
        <span className="label">值</span>
      </p>
      <Form layout="inline" form={form}>
        <Form.Item>
          <Select
            style={formstyle}
            placeholder="请选择类型"
            options={seletOptions}
            onChange={(v) => setType(v)}
          />
        </Form.Item>
        <Form.Item>{TYPE_MAP[type].component}</Form.Item>
      </Form>
    </>
  );
};

export default App;
