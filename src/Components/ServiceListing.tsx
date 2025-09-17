import React, { useState } from "react";
import "./ServiceListing.css";
import ProgressBar from "./ProgressBar";
import type { ServiceData } from "../types";

interface ServiceListingProps {
  onSubmit: (data: ServiceData) => void;
  initialData: ServiceData;
}

const ServiceListing: React.FC<ServiceListingProps> = ({ onSubmit, initialData }) => {
  const [serviceData, setServiceData] = useState<ServiceData>(initialData);

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
    <div className="card">
      <div className="logo">
        <img src="/images/Logo.png" alt="logo"/>
      </div>

            <h2>Service Listing</h2>
      <ProgressBar step={3} />
      <form onSubmit={handleSubmit}>

        {/* Category */}
        <label>Category</label>
        <select
          name="category"
          value={serviceData.category}
          onChange={handleChange}
          required
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
          <option value="Generator Technician">Generator Technician</option>
          <option value="Event Decorator">Carpenter</option>
           <option value="Hair Stylist">Hair Stylist</option>
            <option value="Painter">Painter</option>
             <option value="Solar Panel Installe">Solar Panel Installer</option>
            <option value="Driver/Chauffert">Driver/Chauffer</option>
             <option value="Baby Sitter">Baby Sitter</option>
              <option value="Personal Fitness Coach">Personal Fitness Coach</option>
               <option value="Spa Therapist">Spa Therapist</option>
</select>


        {/* Title */}
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter service title"
          value={serviceData.title}
          onChange={handleChange}
required
        />

        {/* Currency + Price row */}
         <label>Pricing</label>
        <div className="pricing-row">
          <div className="price">
            <input
              type="number"
              name="price"
              placeholder="5000"
              value={serviceData.price}
              onChange={handleChange}
              required
            />

          </div>
           <div className="currency">
            <select
              name="currency"
              value={serviceData.currency}
              onChange={handleChange}
              required
            >
              <option value="NGN">NGN</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>

        {/* Availability */}
        <label>Availability</label>
        <input
          type="text"
          name="availability"
          placeholder="Mondays, Tuesdays..."
          value={serviceData.availability}
          onChange={handleChange}
          required
        />

        {/* Description */}
        <label>Description</label>
        <textarea
          name="description"
          placeholder="Enter a description..."
          value={serviceData.description}
          onChange={handleChange}
          required
        />

        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default ServiceListing