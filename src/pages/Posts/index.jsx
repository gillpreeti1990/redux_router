import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/reducers/posts";
import { Row, Col } from "antd";
import comp from "../images/comp.jpg";
import computerScreen from "../images/computerScreen.jpg";
import twoComputer from "../images/twoComputer.jpg";
import comp_sci from "../images/comp_sci.jpg";
import video_comp from "../images/video_comp.jpg";
import staff_comp from "../images/staff_comp.jpg";
import children_comp from "../images/children_comp.jpg";
import blackComp from "../images/blackComp.jpg";
import randomComp from "../images/randomComp.jpg";

const Posts = () => {
  const dispatch = useDispatch();
  const computerArray = [
    {
      pic: comp_sci,
    },
    {
      pic: video_comp,
    },
    {
      pic: staff_comp,
    },
    {
      pic: children_comp,
    },
    {
      pic: blackComp,
    },
    {
      pic: randomComp,
    },
    {
      pic: comp,
    },
    {
      pic: computerScreen,
    },
    {
      pic: twoComputer,
    },
  ];

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const { postsList } = useSelector(({ posts }) => ({
    postsList: posts.postsList,
  }));
  console.log(`postsList`, postsList);

  const RenderItem = ({ item }) => (
    <div>
      {postsList?.length > 0 &&
        postsList?.map((item) => (
          <div className="flex-col flex  lg:mx-8  my-4 mb-28">
            <div>
              <img
                className="h-40 w-72 rounded-lg mx-4"
                src={computerArray[Math.floor(Math.random() * (8 - 0) + 1)].pic}
              />
            </div>
            <div className=" w-64 shadow-lg rounded-lg mx-8  -my-14">
              <div className="bg-white px-2  py-2 text-center font-bold uppercase text-gray-800 truncate">
                {item?.title}
              </div>
              <div className="bg-gray-200 px-4 py-2 overflow-y-scroll h-12">
                {item?.body || item?.title || "N/A"}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
  return (
    <div>
      {computerArray?.length > 0 && (
        <Row gutter={[24, 12]}>
          {computerArray?.map((item) => (
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <RenderItem item={item} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Posts;
