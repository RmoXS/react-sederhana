import React, { useState, useEffect, useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { getFactViaAxios, getFactViaFetch } from "../Services/FactService";
import { DarkMode } from "../Context/DarkMode";

function FunctionComponentExample() {
  const [data, setData] = useState([]);
  const [otrData, setOtrData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  console.log(isDarkMode);

  useEffect(() => {
    fetchData();
    fetchOtrData();
    console.log("Component mounted!");

    return () => {
      console.log("Component unmounted!");
    };
  }, []);

  useEffect(() => {
    console.log(`Component updated! Count is now: ${count}`);
  }, [count]);

  const fetchData = async () => {
    try {
      const result = await getFactViaAxios();
      setData(result.facts); // Ambil array dari 'facts'
      setLoading(false);
    } catch (error) {
      console.error("Error fetching:", error);
      setLoading(false);
    }
  };

  const fetchOtrData = async () => {
    try {
      const otrResult = await getFactViaFetch();
      setOtrData(otrResult.facts); // Ambil array dari 'facts'
      setLoading(false);
    } catch (error) {
      console.error("Error fetching:", error);
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Container className={`vh-100 mt-5 pt-3 ${isDarkMode && "bg-dark"} ${isDarkMode && "text-white"}`}>
      <Button className="position-absolute top-0 end-0 mt-2 me-2" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light" : "Dark"}
      </Button>
      <h2>Function Component Example</h2>
      <ListGroup>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((fact, index) => (
            <ListGroup.Item key={index}>{fact}</ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No data available.</ListGroup.Item>
        )}
      </ListGroup>
      <ListGroup>
        {Array.isArray(otrData) && otrData.length > 0 ? (
          otrData.map((fact, index) => (
            <ListGroup.Item key={index}>{fact}</ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No data available.</ListGroup.Item>
        )}
      </ListGroup>
      <p className="py-3 m-0">Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment Count</Button>
    </Container>
  );
}

export default FunctionComponentExample;
