import { Box, Center, Flex, VStack } from "@chakra-ui/react";
import moment from "moment";
import React, { useEffect, useState } from "react";

export default function index() {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/cards/getinsights");
      const data = await res.json();
      console.log(data);
      setData(data);
    }
    fetchData();

    return () => {};
  }, []);
  return (
    <>
      <Box w="100%" h="100vh">
        {data?.instagram?.length}
        {data &&
          data?.instagram?.map((res) => (
            // <Box key={res.id}>{moment().diff(res.createdAt, "days")}</Box>
            <Flex key={res.id}>
              {moment(res.createdAt).format("DD/MM/YY hh:mm:ss")}{" "}
            </Flex>
          ))}
      </Box>
    </>
  );
}
