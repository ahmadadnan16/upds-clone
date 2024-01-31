import InfoPage from "../components/InfoPage";

const AboutData = {
  title: "About",
  information: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.",
  ],
};

const About = () => {
  return (
    <>
      <InfoPage title={AboutData.title} information={AboutData.information}/>
    </>
  );
};

export default About;
