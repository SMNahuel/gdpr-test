import Nav from "@/app/components/Private/Nav";
import Box from "../../components/Private/Documents/Box";
import ShareModal from "../../components/Global/ShareModal";

function Documents() {
  const boxItems = [
    {
      title: "Public documents",
      img: "/images/personalSite.svg",
      text: "This takes you to the Legal Hub. You should share this link with everyone: in your website, marketing emails, and so on",
      src: "/privacy/legal-hub",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      title: "Internal documents",
      img: "/images/article.svg",
      text: "These documents are for your team only - except if someone performs an audit. It contains your company policies.",
      src: "/policies-and-procedures/",
      bgColor: "bg-black bg-opacity-80",
      textColor: "text-white",
    },
  ];

  return (
    <>
      <Nav />
      <div
        className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 h-[90vh] flex"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgb(63, 81, 181), rgb(96, 116, 203), rgb(63, 81, 181))",
        }}
      >
        <div className="grid grid-cols-2 mx-64 gap-20 h-[20rem] pt-12 ">
          {boxItems.map((item, index) => (
            <Box item={item} />
          ))}
        </div>
      </div>
      <ShareModal />
    </>
  );
}

export default Documents;
