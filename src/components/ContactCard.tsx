import React from "react";
import s from "../stores/styling";
import FetchGoogleMap from "./FetchGoogleMap";

interface ContactCardProps {
  region: string;
  address: string;
  countrycode: number;
  phonenumber: string;
  id: string;
  lat: number;
  lng: number;
  zoom: number;
}

const ContactCard: React.FC<ContactCardProps> = ({
  region,
  address,
  countrycode,
  phonenumber,
  id,
  lat,
  lng,
  zoom,
}) => {
  return (
    <s.Contact className="card-wrapper">
      <s.StyledH2 className="contact-card-title">{region}</s.StyledH2>

      <s.Contact className="card-container">
        <s.Contact className="contact-card-box">
          <s.Contact className="maps">
            <FetchGoogleMap id={id} lat={lat} lng={lng} zoom={zoom} />
          </s.Contact>
        </s.Contact>
        <s.Contact className="contact-card-box">
          <s.Contact className="contact-info-box">
            <s.StyledP className="contact-info">{address}</s.StyledP>
            <s.Atag href={`tel:${phonenumber}`}>
              {countrycode}+ {phonenumber}
            </s.Atag>
          </s.Contact>
        </s.Contact>
      </s.Contact>
    </s.Contact>
  );
};

export default ContactCard;
