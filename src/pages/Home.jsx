import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { mockTheme1Produdcts, mockTheme2Produdcts } from "../data/mockData";

const Home = () => {
  return (
    <div>
      <div>
        <Navigation />
        <ThemeSection>
          <ThemeButton themeName={"#따순머그컵"} />
          <ThemeButton themeName={"#여름엔바로"} />
        </ThemeSection>
        <GrayLine />
      </div>
      <ProductSection>
        {mockTheme1Produdcts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            thumbnail={product.thumbnail}
          />
        ))}
      </ProductSection>
    </div>
  );
};

const ThemeSection = styled.div`
  display: flex;
  gap: 12px;
  padding: 40px 12px;
`;

const GrayLine = styled.div`
  height: 8px;
  width: 100%;
  background: #eeeeee;
`;

const ProductSection = styled.div`
  padding: 20px;
`;

export default Home;
