import InfoPage from "../components/InfoPage"

const PresidentsMessage = {
  title: "Message from the President",
  information: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.",
  ],
};

const MessageFromPresident = () => {
  return (
    <>
    <InfoPage title={PresidentsMessage.title} information={PresidentsMessage.information}/>
    </>
  )
}

export default MessageFromPresident