import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/reducers/users";
import { Row, Col, Button, Carousel } from "antd";
import comp from "../images/comp.jpg";
import computerScreen from "../images/computerScreen.jpg";
import twoComputer from "../images/twoComputer.jpg";

const Home = () => {
  const [userItem, setUserItem] = useState("");
  const CrouserArray = [
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const { usersList } = useSelector(({ users }) => ({
    usersList: users.usersList,
  }));
  console.log(`usersList`, usersList);
  return (
    <div>
      <Carousel autoplay>
        {CrouserArray?.length > 0 &&
          CrouserArray?.map((ImageArray) => (
            <div>
              <img
                className="h-80 my-4 w-full rounded-lg"
                src={ImageArray.pic}
              />
            </div>
          ))}
      </Carousel>

      {usersList?.data?.length > 0 ? (
        <div>
          <Row>
            {usersList?.data?.map((item) => (
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <div
                  key={item?.id}
                  className=" space-x-2 items-center flex rounded-lg  bg-gray-500 mx-4 my-4 p-4 h-32 w-72"
                >
                  <img src={item?.avatar} className="h-24 w-24 rounded-full" />
                  <div className="text-white">
                    <div className="text-2xl font-bold">{item?.first_name}</div>
                    <div>{item?.last_name}</div>
                    <div>{item?.email}</div>
                    <Button
                      className="rounded-lg"
                      onClick={() => {
                        setUserItem(item);
                      }}
                    >
                      View
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        "no data here"
      )}
    </div>
  );
};

export default Home;
