import { Button, Carousel } from "antd";
import { Wrapper, Middle } from "./style";
import "./style.css";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";

const App = () => {
  return (
    <div>
      <Wrapper>
        <Wrapper.Left>
          <img src="Group (9).png" alt="" />
        </Wrapper.Left>
        <Wrapper.Middle>
          <Wrapper.Middle.Item math={10}>Home</Wrapper.Middle.Item>
          <Wrapper.Middle.Item math={39}>Shop</Wrapper.Middle.Item>
          <Wrapper.Middle.Item math={2}>Plant Care</Wrapper.Middle.Item>
          <Wrapper.Middle.Item math={17}>Blogs</Wrapper.Middle.Item>
        </Wrapper.Middle>
        <Wrapper.Right>
          <SearchOutlined className="icon" />
          <ShoppingCartOutlined className="icon" />
          <Button
            icon={<RightCircleOutlined />}
            type="primary"
            style={{ background: "rgba(70, 163, 88, 1)" }}
          >
            Login
          </Button>
        </Wrapper.Right>
      </Wrapper>
      <Carousel autoplay>
        <div>
          <Middle>
            <Middle.Left>
              <div className="text">
                <Middle.Left.P className="p_text">
                  Welcome to GreenShop
                </Middle.Left.P>
                <Middle.Left.Heder1>
                  Let's Make a Better <span className="planet">Planet</span>
                </Middle.Left.Heder1>
                <Middle.Left.P>
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </Middle.Left.P>

                <Button
                  type="primary"
                  className="button"
                  style={{ background: "rgba(70, 163, 88, 1)" }}
                >
                  SHOP NOW
                </Button>
              </div>
            </Middle.Left>
            <Middle.Right>
              <img className="small_flower" src="01 2.png" alt="" />
              <img className="big_flower" src="01 1.png" alt="" />
            </Middle.Right>
          </Middle>
        </div>
        <div className="text">
          <Middle>
            <Middle.Left>
              <Middle.Left.P className="p_text">
                Welcome to GreenShop
              </Middle.Left.P>
              <Middle.Left.Heder1>
                LET'S MAKE A BETTER <span className="planet">Planet</span>
              </Middle.Left.Heder1>
              <Middle.Left.P className="with">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </Middle.Left.P>
              <Button
                type="primary"
                className="button"
                style={{ background: "rgba(70, 163, 88, 1)" }}
              >
                LET'S START
              </Button>
            </Middle.Left>

            <Middle.Right>
              <img className="small_flower" src="01 2.png" alt="" />
              <img
                className="big_flower"
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d"
                alt=""
              />
            </Middle.Right>
          </Middle>
        </div>
        <div className="text">
          <Middle>
            <Middle.Left>
              <Middle.Left.P className="p_text">
                Welcome to GreenShop
              </Middle.Left.P>
              <Middle.Left.Heder1>
                LET'S OBSERVE A BETTER <span className="planet">Planet</span>
              </Middle.Left.Heder1>
              <Middle.Left.P className="with">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </Middle.Left.P>
              <Button
                type="primary"
                className="button"
                style={{ background: "rgba(70, 163, 88, 1)" }}
              >
                GET CRIDETS
              </Button>
            </Middle.Left>
            <Middle.Right>
              <img className="small_flower" src="01 2.png" alt="" />
              <img
                className="big_flower"
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662"
                alt=""
              />
            </Middle.Right>
          </Middle>
        </div>
      </Carousel>
    </div>
  );
};

export default App;
