import Cards from "./Components/Cards";

const App = () => {
  const servicesData = [
  {
    title: "Web Design",
    subtitle: "Crafts engaging, user-friendly websites.",
    specs: ["Landing Page", "Website", "One Page"],
  },
  {
    title: "App Development",
    subtitle: "Builds fast and scalable mobile apps.",
    specs: ["Android App", "iOS App", "Cross Platform"],
  },
  {
    title: "UI/UX Design",
    subtitle: "Designs clean and intuitive interfaces.",
    specs: ["Wireframes", "Prototypes", "User Testing"],
  },
  {
    title: "Digital Marketing",
    subtitle: "Boosts your online presence and reach.",
    specs: ["SEO", "Social Media", "Ads Campaign"],
  },
  {
    title: "Graphic Design",
    subtitle: "Creates eye-catching visual content.",
    specs: ["Logos", "Posters", "Brand Kits"],
  },
  {
    title: "E-Commerce",
    subtitle: "Develops powerful online stores.",
    specs: ["Shop Setup", "Payment Gateway", "Product Upload"],
  },
  {
    title: "Content Writing",
    subtitle: "Delivers high-quality written content.",
    specs: ["Blogs", "Website Copy", "Product Descriptions"],
  },
  {
    title: "Video Editing",
    subtitle: "Edits professional and engaging videos.",
    specs: ["Reels", "YouTube", "Ads Videos"],
  },
  {
    title: "SEO Optimization",
    subtitle: "Improves website ranking on search engines.",
    specs: ["On Page SEO", "Off Page SEO", "Keyword Research"],
  },
  {
    title: "Brand Strategy",
    subtitle: "Builds strong and memorable brands.",
    specs: ["Brand Identity", "Market Research", "Positioning"],
  },
];

  return (
    <div className="main">
      {servicesData.map(function(elem){
        return <Cards title={elem.title} subtitle={elem.subtitle} specs={elem.specs} />
      })}
    </div>
  )
}

export default App;