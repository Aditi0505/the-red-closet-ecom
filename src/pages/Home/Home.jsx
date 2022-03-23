import { Banner, HorizontalCard } from "../../components";
import { bannerList, cardList } from "../../data/homeData";
import { setTitle } from "../../utils/set-title";
const Home = () => {
  const title = "The Red Closet | Home";
  setTitle(title);
  return (
    <div>
      <main className="outer-wrapper">
        <section className="screen flex-center">
          {bannerList.map(({ image, banner }, index) => (
            <Banner image={image} banner={banner} key={index} />
          ))}
        </section>
        <section className="image-wrapper screen flex-center">
          <div>
            <h1 className="accent-color text-center">
              Welcome to The Red Closet!
            </h1>
            <img
              alt="taylor swift"
              src="/assets/images/taylorSwift.jpg"
              className="responsive"
            />
          </div>
        </section>
        <section className="screen flex-center">
          {cardList.map(({ title, image, msg }, index) => (
            <HorizontalCard title={title} image={image} msg={msg} key={index} />
          ))}
        </section>
      </main>
    </div>
  );
};

export { Home };
