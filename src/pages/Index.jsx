import React, { useState, useEffect } from "react";
import { Container, VStack, HStack, Box, Image, Text, List, ListItem, Spinner } from "@chakra-ui/react";

const Index = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the JSON data from a file
    fetch("/path/to/your/json/file.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  if (loading) {
    return (
      <Container centerContent>
        <Spinner size="xl" />
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={4}>
      <HStack spacing={4} alignItems="flex-start">
        <Box w="50%" overflowY="auto" maxH="80vh">
          <List spacing={3}>
            {data.map((item, index) => (
              <ListItem key={index} onClick={() => handleItemClick(item)} cursor="pointer">
                <Image src={item.preview_thumbnail_path} alt={item.alt_text} boxSize="150px" objectFit="cover" />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box w="50%" p={4} borderWidth="1px" borderRadius="lg">
          {selectedItem ? (
            <VStack align="start" spacing={3}>
              <Text fontWeight="bold">Caption:</Text>
              <Text>{selectedItem.caption}</Text>
              <Text fontWeight="bold">Generated Caption:</Text>
              <Text>{selectedItem.generated_caption}</Text>
              <Text fontWeight="bold">Gen Caption:</Text>
              <Text>{selectedItem.gen_caption}</Text>
              <Text fontWeight="bold">Alt Text:</Text>
              <Text>{selectedItem.alt_text}</Text>
            </VStack>
          ) : (
            <Text>Select an image to see details</Text>
          )}
        </Box>
      </HStack>
    </Container>
  );
};

export default Index;
