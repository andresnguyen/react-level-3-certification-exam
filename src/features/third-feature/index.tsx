import { Flex, Typography } from "antd";
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function ThirdFeature() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <div>
      <Typography.Title level={1} style={{ textAlign: "center" }}>
        Dropdown Demo
      </Typography.Title>
      <Flex justify="space-between">
        <div>
          <Typography.Text>
            Selected User: {selectedUser && JSON.stringify(selectedUser)}
          </Typography.Text>
          <Typography.Title level={5}>User Dropdown</Typography.Title>
          <Dropdown
            options={[...userList]}
            labelKey="name"
            valueChange={(user) => setSelectedUser(user)}
          />
        </div>
        <div>
          <Typography.Text>
            Selected Country:
            {selectedCountry && JSON.stringify(selectedCountry)}
          </Typography.Text>
          <Typography.Title level={5}>Country Dropdown</Typography.Title>
          <Dropdown
            options={countryList}
            labelKey="countryName"
            valueChange={(country) => setSelectedCountry(country)}
          />
        </div>
      </Flex>
    </div>
  );
}

type User = { id: number; name: string };
const userList: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
  { id: 6, name: "Frank" },
  { id: 7, name: "Grace" },
  { id: 8, name: "Hannah" },
  { id: 9, name: "Ivy" },
  { id: 10, name: "Jack" },
  { id: 11, name: "Kurt" },
  { id: 12, name: "Lily" },
  { id: 13, name: "Mona" },
  { id: 14, name: "Nate" },
  { id: 15, name: "Olivia" },
  { id: 16, name: "Paul" },
  { id: 17, name: "Quinn" },
  { id: 18, name: "Rita" },
  { id: 19, name: "Sam" },
  { id: 20, name: "Tina" },
];

type Country = {
  id: number;
  countryName: string;
};
const countryList: Country[] = [
  { id: 1, countryName: "United States" },
  { id: 2, countryName: "Canada" },
  { id: 3, countryName: "Brazil" },
  { id: 4, countryName: "United Kingdom" },
  { id: 5, countryName: "Germany" },
  { id: 6, countryName: "France" },
  { id: 7, countryName: "Italy" },
  { id: 8, countryName: "Spain" },
  { id: 9, countryName: "Australia" },
  { id: 10, countryName: "Japan" },
  { id: 11, countryName: "South Korea" },
  { id: 12, countryName: "India" },
  { id: 13, countryName: "China" },
  { id: 14, countryName: "Russia" },
  { id: 15, countryName: "Mexico" },
  { id: 16, countryName: "Netherlands" },
  { id: 17, countryName: "Turkey" },
  { id: 18, countryName: "Sweden" },
  { id: 19, countryName: "Norway" },
  { id: 20, countryName: "South Africa" },
];
