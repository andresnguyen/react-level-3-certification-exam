import { Flex, Typography } from "antd";
import { Link } from "react-router-dom";

const linkList = [
  {
    name: "1. Local Storage Demo",
    path: "first-feature",
  },
  {
    name: "2. Modal Demo",
    path: "second-feature",
  },
  {
    name: "3. Dropdown Demo",
    path: "third-feature",
  },
];

export default function Home() {
  return (
    <Flex vertical align="center">
      {linkList.map((link) => (
        <Typography.Title level={3} key={link.path}>
          <Link to={link.path}>{link.name}</Link>
        </Typography.Title>
      ))}
    </Flex>
  );
}
