import { useEffect } from "react";
import { Banner, HorizontalCard } from "../../components";
import { useToast } from "../../context";
import { bannerList, cardList } from "../../data/homeData";
import { setTitle } from "../../utils/set-title";
const Home = () => {
  const title = "The Red Closet | Home";
  setTitle(title);
  const { toastDispatch } = useToast();

  useEffect(() => {
    toastDispatch({ type: "HIDE", payload: "" });
  }, [toastDispatch]);
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
          {cardList.map(({ title, image, msg, category }, index) => (
            <HorizontalCard
              title={title}
              image={image}
              msg={msg}
              key={index}
              category={category}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export { Home };
