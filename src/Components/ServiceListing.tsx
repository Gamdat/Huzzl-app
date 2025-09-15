
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import type { ServiceData } from "../types";
import "./ServiceListing.css";


interface ServiceListingProps {
  onSubmit: (data: ServiceData) => void;

}

const ServiceListing: React.FC<ServiceListingProps> = ({ onSubmit }) => {
  const [serviceData, setServiceData] = useState<ServiceData>({
    category: "Plumbing",
    title: "",
    currency: "NGN",
    price: "",
    availability: "",
    description: "",
  });



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setServiceData({ ...serviceData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(serviceData);

  };



  return (
<div className="page-service">
    <div className="card">
 <div className="logo">
        <img src="/images/Logo.png" alt="logo"/>
      </div>
        <h2>Service Listing</h2>
      <ProgressBar step={3} />

    

      <form onSubmit={handleSubmit}>

        <label>Category</label>

        <select

          name="category"

          value={serviceData.category}

     

        >

<option value="Plumbing">Plumbing</option>
          <option value="Electrical">Electrical</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Catering">Catering</option>
          <option value="Baker">Baker</option>
          <option value="Welder">Welder</option>
          <option value="Handy Man">Handy Man</option>
          <option value="Make-Up Artist">Make-Up Artist</option>
          <option value="Mobile Service">Mobile Service</option>
          <option value="Tailor">Tailor/Fashion Designer</option>
          <option value="Dog Trainer">Dog Trainer</option>
          <option value="Private Chef">Private Chef</option>
          <option value="House Keeper">House Keeper</option>
          <option value="Generator Repairer">Generator Repairer</option>
          <option value="Event Decorator">Event Decorator</option>

        </select>



        <label>Title</label>

        <input

          type="text"

          name="title"

          placeholder="Enter service title"

          value={serviceData.title}

          onChange={handleChange}
      

        />



        <div className="pricing-row">
           <div className="price">
            <label>Pricing</label>
            <input
              type="number"
              name="price"
              placeholder="5000"
              value={serviceData.price}
              onChange={handleChange}
           

            />

          </div>
          <div className="currency">
            <label>Currency</label>
            <select
              name="currency"
              value={serviceData.currency}
              onChange={handleChange}
            >
              <option value="NGN">NGN</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
            </select>
          </div>

        </div>



        <label>Availability</label>

        <input

          type="text"

          name="availability"

          placeholder="Mondays, Tuesdays..."

          value={serviceData.availability}

          onChange={handleChange}
         

        />



        <label>Description</label>

        <textarea

          name="description"

          placeholder="Enter a description..."

          value={serviceData.description}

          onChange={handleChange}
         

        />



        <button type="submit">Continue</button>

      </form>

    </div>
</div>
  );

};



export default ServiceListing;

