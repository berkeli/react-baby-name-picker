import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";
import { AiFillHeart, AiOutlineClose } from "react-icons/ai";

const SingleName = ({ name, addOrRemoveFavourites, favourited }) => {
  const leftIcon = name.sex === "f" ? <BiMaleSign /> : <BiFemaleSign />;
  const buttonColor = name.sex === "f" ? "pink" : "blue";
  const [hover, setHover] = useState(false);
  const rightIcon = !hover ? (
    leftIcon
  ) : favourited ? (
    <AiOutlineClose />
  ) : (
    <AiFillHeart />
  );
  return (
    <Button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => addOrRemoveFavourites(name.id)}
      leftIcon={leftIcon} rightIcon={rightIcon} colorScheme={buttonColor}
      m='0.3rem'
      >
      {name.name}
    </Button>
  );
};

export default SingleName;
