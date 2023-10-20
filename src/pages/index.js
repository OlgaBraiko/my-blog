import {
  Section,
  SocialNetworks,
  Title,
  Cover,
  BuyMeCoffee,
} from "../../components";

function Home() {
  return (
    <div>
      <Section>
        <Cover title="Olga<br/> Braiko" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
      </Section>
    </div>
  );
}
export default Home;
