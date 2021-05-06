import {Button, Col, Form, Modal} from "react-bootstrap";
import React, {useState} from "react";

export const FilterMenu = (props) => {
    const [active, setActive] = useState(false);
    const style = {
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "5px",
        margin: "10px"
    }
    const handleCheckChange = (event) => {
        props.checkChange(event);
    }
    const categoriesData = [
        {value: "detective", label: "Detective"},
        {value: "fantasy", label: "Fantasy"},
        {value: "adventure", label: "Adventure"},
        {value: "thriller", label: "Thriller"}
    ]
    const publishersData = [
        {value: "Manning Publications"},
        {value: "O'Reilly"},
        {value: "No Starch Press"},
        {value: "Packt Publishing"}
    ]
    const languagesData = [
        {value: "ukrainian", label: "Ukrainian"},
        {value: "russian", label: "Russian"},
        {value: "english", label: "English"}
    ]


    const categories = categoriesData.map(category =>
        <Form.Check
            key={category.value}
            type="checkbox"
            data-filter="category"
            label={category.label}
            id={category.value}
            value={category.value}
            custom
            onChange={handleCheckChange}
        />);

    const publishers = publishersData.map(category =>
        <Form.Check
            key={category.value}
            type="checkbox"
            data-filter="publisher"
            label={category.value}
            id={category.value}
            value={category.value}
            custom
            onChange={handleCheckChange}
        />);

    const languages = languagesData.map(language =>
        <Form.Check
            key={language.value}
            type="checkbox"
            data-filter="language"
            label={language.label}
            id={language.value}
            value={language.value}
            custom
            onChange={handleCheckChange}
        />);

    return (
        <>
            <Button className="m-2 d-block d-sm-block d-lg-none" onClick={() => setActive(!active)}>Filters</Button>
            <Form
                className={active ? "d-block" : "d-none d-sm-none d-lg-block"}
                style={active ? {...style, position: "absolute", zIndex: 5} : style}>
                <Form.Label as="h2">Filters</Form.Label>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    {categories}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Publisher</Form.Label>
                    {publishers}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Language</Form.Label>
                    {languages}
                </Form.Group>
                <Button>Clear filters</Button>
            </Form>
        </>
    )
}