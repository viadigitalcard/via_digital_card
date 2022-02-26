import React, { useState } from "react";

import { useRouter } from "next/router";
import {
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function Card({ inputData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.table(inputData);
  const contentType = "application/json";
  const [data, setData] = useState({
    card_id: "",
    Name: inputData.Name,
    profilePhoto: inputData.profilePhoto,
    email: inputData.email,
    userName: inputData.userName,
    companyName: inputData.companyName,
    address: inputData.address,
    designation: inputData.designation,
    tagline: inputData.tagline,
    bio: inputData.bio,
    website: inputData.website,
    ytVideo: inputData.ytVideo,
    paymentLink: inputData.paymentLink,
  });

  // session && setData({ card_id: session.user.id });
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setData({
      ...data,
      [name]: value,
    });
  };
  const router = useRouter();
  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("datttaaa", data);
    const response = await fetch("/api/cards", {
      method: "POST",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify({
        card_id: session.user.id,
        Name: data.Name,
        profilePhoto: data.profilePhoto,
        email: data.email,
        userName: data.userName,
        companyName: data.companyName,
        address: data.address,
        designation: data.designation,
        tagline: data.tagline,
        bio: data.bio,
        website: data.website,
        ytVideo: data.ytVideo,
        paymentLink: data.paymentLink,
      }),
    });
    const responseData = await response.json();
    // console.log(responseData);
    router.replace("/userscard");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="First Name"
            value={data.Name}
            name="Name"
            onChange={handleChange}
            required
            autoFocus
          />
          <input
            placeholder="profilePhoto"
            name="profilePhoto"
            value={data.profilePhoto}
            onChange={handleChange}
            required
          />
        </div>
        <input
          placeholder="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <input
          placeholder="userName"
          name="userName"
          value={data.userName}
          onChange={handleChange}
          required
        />
        <input
          placeholder="companyName"
          name="companyName"
          value={data.companyName}
          onChange={handleChange}
          required
        />
        <input
          placeholder="address"
          name="address"
          value={data.address}
          onChange={handleChange}
          required
        />
        <input
          placeholder="designation"
          name="designation"
          value={data.designation}
          onChange={handleChange}
          required
        />
        <input
          placeholder="tagline"
          name="tagline"
          value={data.tagline}
          onChange={handleChange}
          required
        />
        <input
          placeholder="bio"
          name="bio"
          value={data.bio}
          onChange={handleChange}
          required
        />
        <input
          placeholder="website"
          name="website"
          value={data.website}
          onChange={handleChange}
          required
        />
        <input
          placeholder="ytVideo"
          name="ytVideo"
          value={data.ytVideo}
          onChange={handleChange}
          required
        />
        <input
          placeholder="paymentLink"
          name="paymentLink"
          value={data.paymentLink}
          onChange={handleChange}
          required
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
