import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row,
} from "reactstrap";
import Select from "react-select";
import ReactStars from "react-rating-stars-component";

import sample from "../assets/images/sample.jpg";

const RestaurantPanel = () => {
  const [restaurantName, setRestaurant] = useState("");
  const [genre, setGenre] = useState("");
  const [side, setSide] = useState("");
  const [rating, setRating] = useState(0);
  const [selectedMenu, setMenu] = useState(sample);
  const [selectedPhoto, setPhoto] = useState(sample);

  const genreOptions = [
    { value: "Fish and Seafood", label: "Fish and Seafood" },
    { value: "Burger", label: "Burger" },
    { value: "Breakfast", label: "Breakfast" },
    { value: "Traditional Food", label: "Traditional Food" },
    { value: "Cake and dessert", label: "Cake and dessert" },
  ];

  const sideOptions = [
    { value: "Anadolu", label: "Anadolu" },
    { value: "Avrupa", label: "Avrupa" },
  ];

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        if (e.target.name == "menu") setMenu(reader.result);
        else setPhoto(reader.result);

        console.log(reader.result)
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="restaurant-panel">
      <Form>
        <FormGroup className="input-row">
          <div className="row">
            <div className="col-sm-2">
              <Label for="restaurantName">Restaurant Name:</Label>
            </div>

            <div className="col-sm-4">
              <Input
                type="text"
                id="restaurantName"
                onChange={(e) => {
                  setRestaurant(e.target.value);
                }}
              />
            </div>
          </div>
        </FormGroup>

        <FormGroup className="input-row">
          <div className="row">
            <div className="col-sm">
              <div className="row">
                <div className="col-sm-4">
                  <Label>Genre:</Label>
                </div>
                <div className="col-sm-8">
                  <Select
                    options={genreOptions}
                    onChange={setGenre}
                    isClearable
                  />
                </div>
              </div>
            </div>

            <div className="col-sm">
              <div className="row">
                <div className="col-sm-2">
                  <Label>Side:</Label>
                </div>

                <div className="col-sm-8">
                  <Select
                    options={sideOptions}
                    onChange={setSide}
                    isClearable
                  />
                </div>
              </div>
            </div>
          </div>
        </FormGroup>

        <FormGroup className="input-row">
          <div className="row">
            <div className="col-sm-2">
              <Label for="restRating">Rating:</Label>
            </div>
            <div className="col-sm-9">
              <ReactStars
                count={5}
                onChange={setRating}
                size={50}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
          </div>
        </FormGroup>

        <FormGroup className="input-row">
          <div className="row">
            <div className="col-sm-2">
              <Label for="restaurantDescription">Description:</Label>
            </div>
            <div className="col-sm-9">
              <Input type="textarea" name="text" id="restaurantDescription" />
            </div>
          </div>
        </FormGroup>

        <FormGroup className="input-row">
          <div className="row">
            <div className="col-sm photo-selecter">
              <div className="row ">
                <Label className="photo-header">Menu:</Label>
              </div>

              <div className="row">
                <input
                  type="file"
                  name="menu"
                  id="input"
                  accept="image/*"
                  onChange={imageHandler}
                />

                <img src={selectedMenu} alt="menu" id="img" className="img" />
              </div>
            </div>

            <div className="col-sm  photo-selecter">
              <div className="row">
                <Label className="photo-header">Photograph:</Label>
              </div>
              
              <div className="row">

                <input
                  type="file"
                  name="restaurant-photo"
                  id="input"
                  accept="image/*"
                  onChange={imageHandler}
                />

                <img src={selectedPhoto} alt="photo" id="img" className="img" />
              </div>

              </div>
          </div>
        </FormGroup>

        <FormGroup class="input-row">
          <div className="submit-row">
            <Button color="success" className="btn" type="submit">Submit</Button>
            <Button color="danger" className="btn" type="submit">Cancel</Button>
          </div>
        </FormGroup>
      </Form>
    </div>
  );
};

export default RestaurantPanel;
