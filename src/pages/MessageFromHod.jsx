import InfoPage from "../components/InfoPage"

const HODMessage = {
  title: "Message from the HOD",
  information: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio iste consequuntur adipisci deserunt dicta repellat quibusdam, optio a officiis accusamus ipsum omnis ut voluptates maiores veritatis id magnam ullam.",
  ],
};

const MessageFromHod = () => {
  return (
    <>
    <InfoPage title={HODMessage.title} information={HODMessage.information}/>
    </>
  )
}

export default MessageFromHod