import { Flex, Input, Typography } from "antd";
import useLocalStorage from "./useLocalStorage";

export default function FirstFeature() {
  return (
    <>
      <Typography.Title>Local Storage Demo</Typography.Title>
      <Flex vertical gap="large">
        <MyInput />
        <ShowMyInput />
        <MyInput />
      </Flex>
    </>
  );
}

const MyInput = () => {
  const [input, setInput] = useLocalStorage("input", "");
  return <Input value={input} onChange={(e) => setInput(e.target.value)} />;
};

const ShowMyInput = () => {
  const [input] = useLocalStorage("input", "");
  return (
    <Typography.Title level={5}>
      The text you inputted: {input}
    </Typography.Title>
  );
};
