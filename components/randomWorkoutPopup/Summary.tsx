interface SummaryProps {
  content: string;
  icon: string;
  title: string;
}

const Summary = ({ content, icon, title }: SummaryProps) => {
  if (content === "") {
    return;
  }

  return (
    <div className="w-screen lg:w-[47%]">
      <h4 className="italic font-light">
        <i>{icon}</i> {title}:
      </h4>
      <p className="font-medium ml-5 text-lg">{content}</p>
    </div>
  );
};

export default Summary;
